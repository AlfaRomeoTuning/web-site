---

## applyTo: "**/*.{test,spec}.{js,jsx,ts,tsx}"

# AlfaTuning.app — Testing Instructions

## Current Testing Stack

The current project uses:

* Jest through Create React App
* React Testing Library
* `@testing-library/jest-dom`
* `@testing-library/user-event`

Use the existing testing infrastructure for normal development.

---

## Important: Do Not Migrate the Test Runner

Do not migrate:

* Jest → Vitest
* Jest → node:test

as part of normal feature development.

A test-runner migration is a separate architectural task and must be explicitly requested.

If a test infrastructure change is requested, use the `node-testing` skill to evaluate the available options and migration requirements.

---

## Testing Philosophy

Test observable user behavior rather than implementation details.

Prefer tests that answer:

> What does the user see or what can the user do?

over:

> How is this component implemented internally?

---

## React Testing Library

Use the existing React Testing Library setup.

Prefer accessible queries:

1. `getByRole`
2. `getByLabelText`
3. `getByText`
4. other queries when necessary

Avoid relying on:

* CSS classes
* generated DOM structure
* implementation details
* internal React state

---

## User Interactions

Use `@testing-library/user-event` for realistic user interactions.

Prefer:

```js
const user = userEvent.setup();

await user.click(button);
```

over low-level event simulation when possible.

---

## Component Tests

Focus on meaningful behavior:

* rendering
* user interaction
* navigation
* forms
* validation
* conditional UI
* loading states
* error states
* success states

Do not test React or React Router internals.

---

## Forms

When testing forms, cover appropriate combinations of:

* valid input
* invalid input
* validation feedback
* submission
* loading state
* success state
* error state

Tests should verify what the user experiences.

---

## Async Operations

Use Testing Library's async utilities.

Prefer waiting for observable state changes.

Avoid arbitrary delays such as:

```js
setTimeout(...)
```

inside tests.

Do not create pseudo-E2E tests using long chains of mocked implementation details.

---

## Mocking

Mock external boundaries rather than internal implementation whenever practical.

Good candidates:

* network requests
* external services
* browser APIs
* clocks
* filesystem access

Avoid excessive mocking of components or internal modules.

A test that mocks almost everything may provide little confidence.

---

## Navigation

For routing behavior, test the resulting user-visible page or navigation outcome.

Do not test React Router implementation details.

---

## Regression Tests

When fixing a bug:

1. identify the expected behavior
2. reproduce the problem
3. add a regression test when practical
4. implement the fix
5. run the relevant test suite

---

## Coverage

Do not add arbitrary coverage requirements simply to increase a percentage.

Coverage is useful for identifying untested areas, but high coverage alone does not prove correctness.

If coverage thresholds are introduced or changed, use the `node-testing` skill and document the rationale.

Never weaken or raise thresholds merely to make CI green.

---

## Test Scope

Unit/component tests should remain focused.

Do not turn React Testing Library tests into browser automation.

Real-browser workflows belong in a dedicated E2E testing solution and should be treated as a separate project.

---

## Test Naming

Test names should describe observable behavior.

Prefer:

```text
shows an error when the connection fails
navigates to the remote flasher page
submits the contact form with valid data
displays loading state while the request is pending
```

Avoid:

```text
calls useState correctly
sets variable X
renders ComponentInternalWrapper
```

---

## Before Completing a Feature

Run the relevant test suite.

For significant changes also run:

```bash
npm test
```

and:

```bash
npm run build
```

A test should provide meaningful confidence rather than merely increasing coverage.
