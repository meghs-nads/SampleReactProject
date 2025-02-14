import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders welcome message', () => {
  render(<App />);
  
  const welcomeElement = screen.getByText(/Welcome to the Sample React Project/i);
  expect(welcomeElement).toBeInTheDocument();
});

