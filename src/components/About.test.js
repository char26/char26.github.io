import { render, screen } from '@testing-library/react';
import About from './About.js';

test('renders About text', () => {
  render(About);
  const linkElement = screen.getByText(/About/);
  expect(linkElement).toBeInTheDocument();
});
