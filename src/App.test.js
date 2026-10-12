import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders homepage hero heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /your alfa romeo\. tuned with purpose\./i })
  ).toBeInTheDocument();
});

test('renders primary navigation links', () => {
  const { container } = render(<App />);

  const topNavigation = container.querySelector('nav.navbar-top');
  expect(topNavigation).toBeInTheDocument();
  expect(within(topNavigation).getByRole('link', { name: /remote flasher device/i })).toBeInTheDocument();
  expect(within(topNavigation).getByRole('link', { name: /partners/i })).toBeInTheDocument();
});
