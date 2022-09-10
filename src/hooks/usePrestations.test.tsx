import { renderHook, waitFor } from '@testing-library/react';
import { usePrestationsCatalog } from './usePrestations';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import prestationsCatalog from '../mocks/data-test/prestationsCatalog';

const queryClient = new QueryClient();

describe('usePrestations', () => {
  it('Returns the prestations catalog', async () => {
    const { result } = renderHook(() => usePrestationsCatalog(), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
    });

    expect(result.current.prestations).toEqual(undefined);
    expect(result.current.status).toEqual('loading');

    await waitFor(() => {
      expect(result.current.prestations).toEqual(prestationsCatalog);
    });
  });
});
