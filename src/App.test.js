import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage hero heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /unlock the full potential of your alfa romeo/i })
  ).toBeInTheDocument();
});

test('renders primary navigation links', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /remote flasher device/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /partners/i })).toBeInTheDocument();
});
