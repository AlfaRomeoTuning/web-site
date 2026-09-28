---

## applyTo: "**/*.{js,jsx,css,scss}"

# AlfaTuning.app — UI Design Instructions

## Purpose

These instructions define the visual and UX language specific to AlfaTuning.app.

For general UI quality, product-specific design research, interface references, Design Contracts, and the final UI finish gate, use the `anti-ui-slop` skill.

Do not duplicate its workflow here.

---

## Product Identity

AlfaTuning is an automotive engineering and technology company focused primarily on Alfa Romeo.

The interface should communicate:

* engineering
* automotive technology
* technical precision
* performance
* premium quality
* Alfa Romeo expertise
* real-world engineering work

The website should feel like a real automotive technology product, not a generic tuning-shop template.

---

## Visual Direction

Prefer:

* strong typography
* clear information hierarchy
* precise alignment
* controlled spacing
* technical details
* high-quality automotive imagery
* restrained visual effects
* strong contrast
* deliberate use of whitespace

Avoid visual trends that do not serve the product.

Do not add visual effects merely because they are fashionable.

---

## Existing Technology

The project currently uses:

* Bootstrap 5
* React-Bootstrap
* React 18

Reuse the existing component and styling system.

Do not introduce:

* Tailwind
* Material UI
* Chakra UI
* styled-components
* another design system

unless explicitly requested.

---

## Bootstrap First

Before creating custom CSS:

1. Check whether Bootstrap utilities solve the problem.
2. Check existing project styles.
3. Check existing React-Bootstrap components.
4. Reuse existing patterns where possible.

Do not create a new visual pattern when an existing one is suitable.

---

## Product-Specific Content

Use real AlfaTuning terminology.

Examples include:

* ECU
* TCU
* CAN
* UDS
* ECU flashing
* diagnostics
* remote flashing
* calibration
* R&D
* vehicle interface
* diagnostic interface

Do not replace technical terminology with vague marketing language when the technical term provides useful information.

---

## Automotive Imagery

Prefer real AlfaTuning assets, real hardware, real vehicles, real screenshots, and real engineering work.

Do not use generic stock imagery when a relevant AlfaTuning asset exists.

Do not invent:

* product screenshots
* hardware
* technical diagrams
* vehicle capabilities
* performance results

---

## Product Areas

Maintain clear visual distinction between:

### Products

Things customers can purchase or use.

### Services

Things AlfaTuning performs for customers.

### R&D

Engineering and experimental work.

### Documentation

Technical information and guides.

### Partners

Business and technical relationships.

Do not force all of these into identical card layouts.

---

## R&D Interfaces

R&D content should communicate engineering rather than generic marketing.

When appropriate, present information in a structure such as:

1. Problem
2. Goal
3. Approach
4. Hardware
5. Software
6. Development
7. Results
8. Limitations
9. Current status

Clearly distinguish:

* prototype
* experimental
* production
* planned

---

## Typography

Typography should create a clear hierarchy.

Prioritize:

1. page title
2. section heading
3. supporting information
4. technical details
5. primary action

Do not use extremely large headings simply to create visual impact.

Text must remain readable on mobile.

---

## Cards

Cards should represent a meaningful repeated concept.

Good examples:

* products
* services
* R&D projects
* technical features

Do not turn every section into a grid of cards.

Avoid interchangeable dashboard-style cards containing:

* arbitrary statistics
* meaningless percentages
* fake metrics
* decorative badges

---

## Buttons

Primary actions should be obvious.

Prefer specific labels such as:

* Explore Product
* View Project
* Learn More
* Contact Us
* Get Started

Avoid vague labels such as:

* Click Here
* More
* Submit

when a more descriptive action is possible.

---

## Animation

Animation must support:

* hierarchy
* navigation
* feedback
* state changes

Do not use animation merely to make a page look more impressive.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

## Responsive Design

Mobile is a first-class experience.

Consider at least:

* 320px
* 375px
* 430px
* 768px
* 1024px
* 1280px
* 1440px+

Do not simply stack every desktop section vertically on mobile.

Consider how:

* navigation
* CTA placement
* cards
* images
* technical information
* forms
* tables

should change at smaller widths.

---

## Accessibility

Maintain:

* semantic HTML
* keyboard navigation
* visible focus
* sufficient contrast
* accessible form controls
* meaningful button labels
* appropriate touch targets
* reduced-motion support

Do not sacrifice accessibility for visual design.

---

## UX Priority

When making a UI decision, prioritize:

1. User task
2. Information hierarchy
3. Clarity
4. Navigation
5. Accessibility
6. Responsive behavior
7. Performance
8. Visual polish

Visual decoration should never hide or complicate the primary task.
