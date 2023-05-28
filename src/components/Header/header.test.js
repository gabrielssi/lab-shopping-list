import { render, screen } from '@testing-library/react';
import Header from './Header';

it('search LabShoppingList in element Header', () => {
  render(<Header />);
  const headerElement = screen.getByText(/LabShoppingList/i);
  expect(headerElement).toBeInTheDocument();
})