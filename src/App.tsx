import { FC, ReactNode, useState, useCallback } from 'react';
import './App.css';
import { usePrestationsCatalog } from './hooks/usePrestations';
import { Prestation } from './models/Prestations';
import { Category } from './services/prestations.types';
import { useCounter } from './hooks/useCounter';
import { useBasket, useBasketUpdater } from './contexts/BasketContext';

interface PrestationItemProps extends Prestation {
  children?: ReactNode;
}

interface PrestationCTAProps {
  prestation: Prestation;
}

const PrestationCTA: FC<PrestationCTAProps> = ({ prestation }) => {
  const { addPrestations, removePrestation } = useBasketUpdater();
  const { prestations } = useBasket();

  const handleAddPrestation = (prestation: Prestation) => () => addPrestations(prestation);
  const handleRemovePrestation = (prestation: Prestation) => () => removePrestation(prestation);

  return (
    <>
      <button onClick={handleAddPrestation(prestation)}>Ajouter au panier</button>
      {prestations?.[prestation.reference]?.total ? (
        <>
          <span>{prestations[prestation.reference].total}</span>
          <button onClick={handleRemovePrestation(prestation)}>Retirer du panier</button>
        </>
      ) : null}
    </>
  );
};

const PrestationItem: FC<PrestationItemProps> = ({ title, duration, price, children }) => {
  return (
    <div>
      <p>Nom: {title}</p>
      <p>Durée: {duration}</p>
      <p>Prix: {price}</p>
      {children}
    </div>
  );
};

type PrestationListProps = Pick<Category, 'title'> & { children: ReactNode };
const PrestationsCategory: FC<PrestationListProps> = ({ title, children }) => {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

const centsToEuro = (price: number) => (price / 100).toFixed(2);

const BasketOverview = () => {
  const { totalPrice } = useBasket();
  return <h2>Total: {centsToEuro(totalPrice)}€</h2>;
};

const App: FC = () => {
  const { prestations } = usePrestationsCatalog();
  return (
    <main>
      <h1>We Casa</h1>
      {prestations?.categories.map(category => (
        <PrestationsCategory title={category.title} key={category.reference}>
          {category.prestations.map(prestation => (
            <PrestationItem key={prestation.reference} {...prestation}>
              <PrestationCTA prestation={prestation} />
            </PrestationItem>
          ))}
        </PrestationsCategory>
      ))}
      <BasketOverview />
    </main>
  );
};

export default App;
