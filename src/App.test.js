import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page hero heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hey, I'm Dalton/i);
  expect(headingElement).toBeInTheDocument();
});
