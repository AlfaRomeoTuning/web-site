// Adds jest-dom matchers such as toBeInTheDocument() to Vitest's expect.
// Testing Library unmounts after each test on its own because globals are enabled.
import '@testing-library/jest-dom/vitest';
