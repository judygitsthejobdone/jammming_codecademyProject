import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search bar', () => {
  render(<App />);
  const jammmingText = screen.getByText(/jammming/i);
  expect(jammmingText).toBeInTheDocument();
});
