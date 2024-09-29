import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Personal Budget Manager heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Personal Budget Manager/i);
  expect(headingElement).toBeInTheDocument();
});
