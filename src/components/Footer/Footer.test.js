import { render, screen } from '@testing-library/react';
import Footer from './Footer';

it('search Gabriel in element Footer', () => {
  render(<Footer />);
  const footerElement = screen.getByText(/Gabriel/i);
  expect(footerElement).toBeInTheDocument();
})