import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it.todo('Renders the app', () => {
    render(<App />);
    expect(screen.getByText('We Casa')).toBeInTheDocument();
  });
});
