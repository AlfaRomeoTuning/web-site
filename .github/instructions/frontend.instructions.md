---
applyTo: "**/*.{js,jsx,ts,tsx}"
---

# AlfaTuning.app — Frontend Instructions

## Scope

These instructions apply to React frontend development.

---

## React Version

The project uses:

```text
React 18
```

Use APIs compatible with React 18.

Do not introduce React 19-specific APIs unless the project is explicitly migrated.

---

## Component Design

Use functional components and hooks.

Keep components reasonably small and focused.

A component should generally have one primary responsibility.

Prefer composition over deeply nested conditional logic.

Avoid creating components for trivial fragments that are used only once unless they significantly improve readability.

---

## Component Reuse

Before creating a new component:

1. search the repository
2. identify similar components
3. determine whether the existing component can be extended
4. reuse existing styles and behavior

Do not duplicate existing UI patterns.

---

## Props

Keep component APIs explicit.

Prefer:

```jsx
<Component
  title="..."
  description="..."
/>
```

over passing large anonymous objects when individual properties are the actual API.

Avoid unnecessary prop drilling.

However, do not introduce global state simply to avoid a small amount of prop passing.

---

## Hooks

Use React hooks appropriately:

* `useState`
* `useEffect`
* `useMemo`
* `useCallback`
* `useRef`
* `useContext`

Do not use `useMemo` or `useCallback` by default.

Use memoization when there is a demonstrated or clear reason.

---

## Effects

Keep `useEffect` focused on synchronization with external systems.

Do not use `useEffect` to calculate values that can be derived during rendering.

Avoid unnecessary effects.

Always consider cleanup for:

* event listeners
* timers
* subscriptions
* WebSocket connections
* asynchronous operations

---

## Routing

Use `react-router-dom` version 6.

Follow the existing route structure.

Use router navigation rather than manually manipulating `window.location` for internal routes.

Prefer:

```jsx
<Link />
```

or:

```jsx
useNavigate()
```

for internal navigation.

External URLs should use normal links.

---

## Bootstrap

The project uses Bootstrap 5 and React-Bootstrap.

Prefer React-Bootstrap components when the project already uses them for the same UI pattern.

Use Bootstrap utility classes for simple layout and spacing.

Avoid unnecessary custom CSS when Bootstrap already provides the required behavior.

---

## Responsive Layout

All new UI must work on:

* mobile
* tablet
* desktop

At minimum consider:

```text
320px
375px
430px
768px
1024px
1280px
1440px+
```

Never introduce intentional horizontal scrolling on normal pages.

---

## Images

Use responsive images.

Avoid loading unnecessarily large assets.

Always provide appropriate `alt` text for informative images.

Use empty alt text for purely decorative images where appropriate.

Avoid layout shifts caused by images without known dimensions.

---

## Loading States

Async UI should have an appropriate loading state when necessary.

Avoid infinite spinners.

Consider:

* loading
* success
* empty
* error

states for asynchronous content.

---

## Browser APIs

Because the site uses React Snap prerendering, browser-only APIs require care.

Do not access:

```js
window
document
localStorage
navigator
```

during server/prerender execution unless the code safely checks for their availability.

Prefer browser-specific logic inside appropriate lifecycle boundaries.

---

## Performance

Avoid unnecessary:

* renders
* state
* effects
* dependencies
* large client-side libraries

Do not optimize prematurely.

When performance is a concern, identify the actual bottleneck before changing architecture.

---

## Accessibility

All interactive components should support keyboard navigation.

Buttons should be buttons.

Links should be links.

Do not use clickable `<div>` elements when a semantic element exists.

Form controls require accessible labels.

Maintain visible focus states.

Do not rely only on color to communicate state.

---

## Existing Architecture First

Do not introduce:

* Redux
* Zustand
* MobX
* another router
* another UI framework

unless explicitly requested.

Use the simplest state management that fits the existing application.
