---
applyTo: "**/*.{js,jsx}"
---

# AlfaTuning.app — SEO Instructions

## Scope

These instructions apply to all public-facing pages and content.

The project uses:

* `react-helmet`
* `react-snap`
* custom sitemap generation

Do not introduce another SEO framework unless explicitly requested.

---

## Page Metadata

Every public page should have an appropriate:

* title
* meta description
* canonical URL where appropriate
* Open Graph metadata where appropriate

Titles and descriptions must describe the actual page content.

Do not duplicate the same metadata across unrelated pages.

---

## Headings

Use semantic heading hierarchy.

Normally:

```text
H1
 ├── H2
 │    └── H3
 └── H2
```

Do not skip heading levels merely for visual sizing.

Use CSS classes for visual size rather than incorrect heading levels.

---

## URLs

Use clean, descriptive URLs.

Prefer:

```text
/remote-flasher
/r-and-d
/projects
/contact
```

over meaningless identifiers.

Do not change existing public URLs without considering backwards compatibility.

---

## React Helmet

Use the project's existing `react-helmet` implementation.

Do not introduce `react-helmet-async` or another metadata library unless an explicit migration is requested.

---

## React Snap

Public routes must remain compatible with prerendering.

When adding a route:

1. ensure React Router can resolve it
2. ensure React Snap can crawl it
3. ensure metadata is available during rendering
4. avoid browser-only assumptions
5. verify generated output when practical

---

## Sitemap

The project uses:

```text
scripts/generate-sitemap.js
```

and:

```bash
npm run generate-sitemap
```

Do not replace the sitemap implementation without inspecting the existing script.

When adding public routes, verify whether the sitemap generator automatically includes them.

If it does not, update it consistently.

---

## SEO Content

Do not add SEO text simply to increase keyword density.

Content should be useful to users first.

Avoid keyword stuffing.

Use automotive terminology naturally.

---

## Structured Data

Only add structured data when the content genuinely represents the schema.

Never invent:

* ratings
* reviews
* prices
* product availability
* organization statistics

---

## Images

Important images should have descriptive alt text.

Alt text should describe the image's purpose, not stuff keywords.

Decorative images should not contain unnecessary SEO text in `alt`.

---

## Internal Linking

Use descriptive anchor text.

Prefer:

```text
Explore the Remote Flasher
```

over:

```text
Click here
```

Link related AlfaTuning products, services and R&D pages where useful.

---

## SEO Validation

After adding or modifying a public page, check:

* page title
* description
* canonical URL
* heading structure
* internal links
* image alt text
* route accessibility
* prerendering
* sitemap inclusion
