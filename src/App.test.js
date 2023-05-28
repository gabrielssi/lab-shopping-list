import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders App component correctly', () => {
  render(<App />);

  // Verifica se o componente Header está sendo renderizado
  const headerElement = screen.getByText(/LabShoppingList/i);
  expect(headerElement).toBeInTheDocument();

  // Verifica se o componente Footer está sendo renderizado
  const footerElement = screen.getByText(/Criado por Gabriel Souza/i);
  expect(footerElement).toBeInTheDocument();

  // Verifica se o botão "Limpar" está sendo renderizado
  const clearButtonElement = screen.getByRole('button', { name: /Limpar/i });
  expect(clearButtonElement).toBeInTheDocument();

  // Verifica se o input para adicionar produtos está sendo renderizado
  const inputElement = screen.getByPlaceholderText(/Digite o nome do produto/i);
  expect(inputElement).toBeInTheDocument();

  // Verifica se o botão "Adicionar" está sendo renderizado
  const addButtonElement = screen.getByRole('button', { name: /Adicionar/i });
  expect(addButtonElement).toBeInTheDocument();
});

test('adds and removes a product', () => {
  render(<App />);


});
