import { render, screen } from '@testing-library/react';
import { BasketContextProvider } from '../../../contexts/BasketContext';
import React from 'react';
import { BasketOverview } from './BasketOverview';

describe('<BasketOverview>', () => {
  it('Renders correctly', () => {
    render(
      <BasketContextProvider>
        <BasketOverview />
      </BasketContextProvider>
    );

    expect(screen.getByText('Total: 0.00€ - 00min')).toBeInTheDocument();
  });

  it('Display the total price and total duration of current basket', () => {
    render(
      <BasketContextProvider initialBasketState={{ totalPrice: 1200, totalDuration: 400, prestations: undefined }}>
        <BasketOverview />
      </BasketContextProvider>
    );

    expect(screen.getByText('Total: 12.00€ - 6h40')).toBeInTheDocument();
  });
});
