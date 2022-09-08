import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BasketContextProvider } from './contexts/BasketContext';

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BasketContextProvider>
        <App />
      </BasketContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
