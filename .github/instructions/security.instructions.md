---
applyTo: "**/*.{js,jsx,ts,tsx}"
---

# AlfaTuning.app — Security Instructions

## General Rule

Treat all external and user-controlled data as untrusted.

This includes:

* URL parameters
* query parameters
* API responses
* form input
* HTML
* Markdown converted to HTML
* external content
* uploaded files
* local storage data

---

## HTML Rendering

The project uses:

* `html-react-parser`
* `dompurify`

Never render untrusted HTML directly.

Do not introduce:

```jsx
dangerouslySetInnerHTML
```

without explicit sanitization and a clear reason.

When HTML must be rendered from an untrusted source, use the existing sanitization mechanism.

---

## DOMPurify

Use DOMPurify when processing HTML from untrusted sources.

Do not bypass sanitization simply because the content currently comes from a trusted API.

Keep the trust boundary explicit.

---

## URLs

Validate external URLs before rendering or using them where appropriate.

Be particularly careful with:

```text
javascript:
data:
```

and other potentially dangerous URL schemes.

---

## User Input

Client-side validation improves UX but does not provide security.

Any sensitive validation must also happen on the server/API side.

Never trust:

* hidden fields
* disabled fields
* client-side permissions
* client-side roles
* local storage values

---

## Secrets

Never put secrets in frontend source code.

Do not commit:

* API keys
* passwords
* private tokens
* private certificates
* credentials

Remember that frontend environment variables are generally exposed to the browser after bundling.

---

## Dependencies

Before adding a dependency:

* check maintenance
* check security
* check bundle impact
* check whether existing dependencies solve the problem

Avoid unnecessary dependencies.

---

## External Content

Do not blindly trust data returned from external APIs.

Validate expected structure before rendering it.

---

## Security Changes

When modifying authentication, authorization, HTML rendering, forms or external integrations, explicitly consider:

* XSS
* CSRF where applicable
* injection
* malicious URLs
* sensitive data exposure
* dependency vulnerabilities

Do not weaken existing security controls merely to simplify implementation.
