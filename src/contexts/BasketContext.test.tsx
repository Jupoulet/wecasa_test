import { renderHook } from '@testing-library/react';
import { BasketContextProvider, useBasket } from './BasketContext';

describe('useBasket', () => {
  it('Can retrieve basket information', async () => {
    const { result } = renderHook(() => useBasket(), {
      wrapper: ({ children }) => <BasketContextProvider>{children}</BasketContextProvider>,
    });

    expect(result.current.prestations).toEqual(undefined);
    expect(result.current.totalDuration).toEqual(0);
    expect(result.current.totalPrice).toEqual(0);
  });
});
