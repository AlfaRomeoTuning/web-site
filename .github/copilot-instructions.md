# AlfaTuning.app — Copilot Instructions

## Project

This repository contains the frontend application for **AlfaTuning.app**, an automotive technology and engineering platform focused on Alfa Romeo.

The project is a React web application.

Primary goals:

* present AlfaTuning products and services
* showcase R&D and engineering projects
* provide a professional automotive technology brand experience
* communicate technical credibility
* provide a fast and responsive website
* maintain good SEO
* remain maintainable and easy to extend

The public website is:

https://alfatuning.app

---

## Technology Stack

The current project uses:

* React 18
* React DOM 18
* Create React App
* `react-scripts`
* React Router 6
* Bootstrap 5
* React-Bootstrap
* React Helmet
* React Snap
* DOMPurify
* html-react-parser
* Jest / React Testing Library

Do not replace or migrate the existing stack unless explicitly requested.

In particular:

* do not introduce Next.js
* do not introduce Vite
* do not introduce another CSS framework
* do not introduce another router
* do not replace React-Bootstrap with another component library

A migration may be considered as a separate architectural project, but must not happen implicitly during normal feature development.

---

## Project Architecture

Before implementing a feature:

1. Inspect the existing project structure.
2. Find related components and pages.
3. Find existing routing patterns.
4. Find existing styling patterns.
5. Reuse existing utilities and components.
6. Follow existing naming conventions.

Do not create duplicate implementations.

Prefer extending existing functionality over introducing parallel systems.

---

## React

Use functional React components.

Prefer:

```jsx
function Component() {
  return (...);
}
```

or the project's established component style.

Avoid introducing class components into new code.

Keep components focused on a clear responsibility.

Do not create abstractions simply to reduce a few repeated lines.

---

## Routing

The project uses:

```text
react-router-dom 6.x
```

Follow the existing routing architecture.

When adding a page:

1. create the page component
2. add the route using the existing routing structure
3. provide appropriate SEO metadata
4. ensure navigation links use React Router
5. verify direct navigation to the route works with the existing deployment/prerendering setup

Do not introduce another routing solution.

---

## Styling

The project uses:

* Bootstrap 5
* React-Bootstrap

Prefer existing Bootstrap and React-Bootstrap patterns.

Before adding custom CSS:

1. check whether Bootstrap utilities solve the problem
2. check existing project styles
3. reuse existing classes and patterns

Do not introduce Tailwind, Material UI, Chakra UI, styled-components, or another styling framework unless explicitly requested.

Avoid large inline style objects when reusable CSS is more appropriate.

---

## Components

Reuse existing components whenever possible.

Before creating a component, search the project for similar functionality.

Good component names describe their purpose:

```text
ProductCard
ServiceCard
ProjectCard
HeroSection
ContactForm
Navigation
Footer
```

Avoid generic names:

```text
Box
Container2
Section1
Thing
ComponentA
```

---

## Dependencies

Do not add dependencies unless they provide meaningful value.

Before adding a dependency:

1. check the existing dependencies
2. check whether the functionality can be implemented with existing tools
3. consider bundle size
4. consider maintenance
5. consider security

Avoid dependency proliferation.

---

## Existing Dependencies

Important existing dependencies include:

### UI

* `bootstrap`
* `react-bootstrap`

### React

* `react`
* `react-dom`
* `react-router-dom`

### SEO

* `react-helmet`

### Content / HTML

* `html-react-parser`
* `dompurify`

### Static rendering

* `react-snap`

### Testing

* `@testing-library/react`
* `@testing-library/jest-dom`
* `@testing-library/user-event`

Use these technologies where appropriate instead of introducing replacements.

---

## Static Rendering

The project uses `react-snap`.

The production build currently runs:

```bash
npm run build
```

followed by:

```bash
react-snap
```

and sitemap generation.

Do not introduce client-only behavior that breaks prerendering without considering its impact on the generated HTML.

When adding a public page, verify that:

* it can render without browser-only APIs
* required content is available during prerendering
* metadata is present in the generated page
* the route can be crawled

---

## Scripts

Use the existing npm scripts.

Development:

```bash
npm start
```

Production build:

```bash
npm run build
```

Tests:

```bash
npm test
```

Do not replace these commands with alternative tooling unless explicitly requested.

---

## Code Changes

Keep changes focused.

Do not:

* reformat unrelated files
* rename unrelated components
* migrate technologies
* rewrite working architecture
* remove dependencies without checking usage
* change unrelated routes

A feature request should result in the smallest clean change that satisfies the requirement.

---

## Content

Do not invent automotive specifications.

Never fabricate:

* supported ECUs
* supported vehicles
* horsepower gains
* torque gains
* compatibility
* pricing
* technical specifications
* certifications
* customer statistics
* testimonials
* performance claims

If information is unavailable, use existing project content or ask for clarification.

---

## Automotive Brand

AlfaTuning should communicate:

* engineering
* automotive technology
* Alfa Romeo expertise
* ECU technology
* diagnostics
* flashing
* hardware development
* R&D

The website should feel like a real engineering/product company rather than a generic tuning website.

---

## Quality

Before completing a significant change, verify:

* application builds
* routes work
* no console errors were introduced
* responsive layout works
* existing functionality remains intact
* SEO metadata is present where required
* accessibility has been considered
* tests pass where applicable

Follow the more specific instructions in:

```text
.github/instructions/
```
