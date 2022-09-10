import { FC } from 'react';
import './App.css';
import { CategorizedPrestations } from './components/prestations/categorized-prestations/CategorizedPrestations';
import { BasketOverview } from './components/basket/basket-overview/BasketOverview';

const App: FC = () => {
  return (
    <main>
      <h1>We Casa</h1>
      <CategorizedPrestations />
      <BasketOverview />
    </main>
  );
};

export default App;
