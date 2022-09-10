import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { PrestationCTA } from './PrestationCTA';
import prestation from '../../../mocks/data-test/prestation';
import { BasketContextProvider } from '../../../contexts/BasketContext';
import userEvent from '@testing-library/user-event';

describe('<PrestationCTA>', () => {
  it('Render a button to add prestation to basket at first', () => {
    render(
      <BasketContextProvider>
        <PrestationCTA prestation={prestation} />
      </BasketContextProvider>
    );
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.queryByText('-')).toBeNull();
  });

  it('Render remove prestation button once there is at least one same prestation in basket', async () => {
    render(
      <BasketContextProvider>
        <PrestationCTA prestation={prestation} />
      </BasketContextProvider>
    );
    const addPrestationButton = screen.getByText('+');
    expect(addPrestationButton).toBeInTheDocument();

    await userEvent.click(addPrestationButton);
    await waitFor(() => {
      expect(screen.getByText('-')).toBeInTheDocument();
    });
  });

  it('Display the total amount of this prestation has been added to basket', async () => {
    render(
      <BasketContextProvider>
        <PrestationCTA prestation={prestation} />
      </BasketContextProvider>
    );
    const addPrestationButton = screen.getByText('+');
    expect(addPrestationButton).toBeInTheDocument();

    await userEvent.click(addPrestationButton);
    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument();
    });

    await userEvent.click(addPrestationButton);
    await waitFor(() => {
      expect(screen.getByText('2')).toBeInTheDocument();
    });
  });

  it('Can remove a prestation from the basket', async () => {
    render(
      <BasketContextProvider>
        <PrestationCTA prestation={prestation} />
      </BasketContextProvider>
    );
    const addPrestationButton = screen.getByText('+');
    expect(addPrestationButton).toBeInTheDocument();

    await userEvent.click(addPrestationButton);
    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument();
    });

    const removePrestationButton = screen.queryByText('-');
    await userEvent.click(removePrestationButton as HTMLButtonElement);

    await waitFor(() => {
      expect(screen.queryByText('1')).toBeNull();
      expect(screen.queryByText('-')).toBeNull();
    });
  });
});
