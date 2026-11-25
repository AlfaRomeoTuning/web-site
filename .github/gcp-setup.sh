#!/usr/bin/env bash
# One-time GCP setup for .github/workflows/deploy.yml: keyless GitHub OIDC auth
# (Workload Identity Federation) and an Artifact Registry repository.
#
# Run it once as a project owner:
#   PROJECT_ID=<the GCR_PROJECT value> bash .github/gcp-setup.sh
#
# It prints the two repository variables the workflow reads at the end.
set -euo pipefail

: "${PROJECT_ID:?set PROJECT_ID to the GCP project id}"
REGION="us-central1"
SERVICE_NAME="alfatuningapp-web-site"
AR_REPO="alfatuningapp-web-site"
GITHUB_REPO="AlfaRomeoTuning/web-site"
POOL_ID="github"
PROVIDER_ID="web-site"
DEPLOY_SA_NAME="github-deploy"
DEPLOY_SA="${DEPLOY_SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"

gcloud config set project "$PROJECT_ID"
PROJECT_NUMBER="$(gcloud projects describe "$PROJECT_ID" --format='value(projectNumber)')"

gcloud services enable \
  iamcredentials.googleapis.com \
  sts.googleapis.com \
  artifactregistry.googleapis.com \
  run.googleapis.com

# Artifact Registry repository for the site image.
gcloud artifacts repositories describe "$AR_REPO" --location="$REGION" >/dev/null 2>&1 ||
  gcloud artifacts repositories create "$AR_REPO" \
    --repository-format=docker \
    --location="$REGION" \
    --description="Images for $SERVICE_NAME"

# Deploy service account. It gets only:
#   - push to this one Artifact Registry repository,
#   - deploy new revisions of this one Cloud Run service,
#   - act as the service's runtime service account (required to deploy a revision).
gcloud iam service-accounts describe "$DEPLOY_SA" >/dev/null 2>&1 ||
  gcloud iam service-accounts create "$DEPLOY_SA_NAME" \
    --display-name="GitHub Actions deploy ($GITHUB_REPO)"

gcloud artifacts repositories add-iam-policy-binding "$AR_REPO" \
  --location="$REGION" \
  --member="serviceAccount:$DEPLOY_SA" \
  --role="roles/artifactregistry.writer"

gcloud run services add-iam-policy-binding "$SERVICE_NAME" \
  --region="$REGION" \
  --member="serviceAccount:$DEPLOY_SA" \
  --role="roles/run.developer"

# The Cloud Run service runs as this account. An empty value means the
# Compute Engine default service account.
RUNTIME_SA="$(gcloud run services describe "$SERVICE_NAME" --region="$REGION" \
  --format='value(spec.template.spec.serviceAccountName)')"
RUNTIME_SA="${RUNTIME_SA:-${PROJECT_NUMBER}-compute@developer.gserviceaccount.com}"

gcloud iam service-accounts add-iam-policy-binding "$RUNTIME_SA" \
  --member="serviceAccount:$DEPLOY_SA" \
  --role="roles/iam.serviceAccountUser"

# Workload Identity Pool (shared with other repositories) and a GitHub OIDC
# provider for this one. Tokens are accepted only from this repository's main branch.
gcloud iam workload-identity-pools describe "$POOL_ID" --location=global >/dev/null 2>&1 ||
  gcloud iam workload-identity-pools create "$POOL_ID" \
    --location=global \
    --display-name="GitHub Actions"

gcloud iam workload-identity-pools providers describe "$PROVIDER_ID" \
  --location=global --workload-identity-pool="$POOL_ID" >/dev/null 2>&1 ||
  gcloud iam workload-identity-pools providers create-oidc "$PROVIDER_ID" \
    --location=global \
    --workload-identity-pool="$POOL_ID" \
    --display-name="$GITHUB_REPO" \
    --issuer-uri="https://token.actions.githubusercontent.com" \
    --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.ref=assertion.ref" \
    --attribute-condition="assertion.repository == '$GITHUB_REPO' && assertion.ref == 'refs/heads/main'"

# Let identities from that provider impersonate the deploy service account.
gcloud iam service-accounts add-iam-policy-binding "$DEPLOY_SA" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL_ID}/attribute.repository/${GITHUB_REPO}"

cat <<EOF

Done. Add these repository variables (Settings > Secrets and variables > Actions > Variables):

  GCP_WORKLOAD_IDENTITY_PROVIDER = projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL_ID}/providers/${PROVIDER_ID}
  GCP_DEPLOY_SERVICE_ACCOUNT     = ${DEPLOY_SA}

Or with gh:

  gh variable set GCP_WORKLOAD_IDENTITY_PROVIDER --repo $GITHUB_REPO --body "projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL_ID}/providers/${PROVIDER_ID}"
  gh variable set GCP_DEPLOY_SERVICE_ACCOUNT --repo $GITHUB_REPO --body "${DEPLOY_SA}"

After the first successful deploy, remove the old key:

  gh secret delete GCR_SA_KEY --repo $GITHUB_REPO
  gcloud iam service-accounts keys list --iam-account=<old SA email>
  gcloud iam service-accounts keys delete <KEY_ID> --iam-account=<old SA email>
EOF
