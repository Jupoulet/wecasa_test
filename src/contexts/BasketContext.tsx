import { createContext, Dispatch, FC, ReactNode, SetStateAction, useCallback, useContext, useState } from 'react';
import { Prestation } from '../models/Prestations';
import { Reference } from '../models/Utils';

interface PrestationsWithTotal {
  total: number;
  prestation: Prestation;
}

type PrestationsBasket = Record<Reference, PrestationsWithTotal> | undefined;

interface BasketProps {
  totalPrice: number;
  prestations: PrestationsBasket;
}

const initialBasket: BasketProps = { totalPrice: 0, prestations: undefined };

const BasketContext = createContext<BasketProps>(initialBasket);
const BasketContextUpdater = createContext<Dispatch<SetStateAction<BasketProps>> | undefined>(undefined);

export const BasketContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [basket, setBasket] = useState<BasketProps>(initialBasket);

  return (
    <BasketContext.Provider value={basket}>
      <BasketContextUpdater.Provider value={setBasket}>{children}</BasketContextUpdater.Provider>
    </BasketContext.Provider>
  );
};

export const useBasket = (): BasketProps => {
  const basketContext = useContext(BasketContext);

  if (typeof basketContext === 'undefined') {
    throw new Error('You need to wrap your component with BasketContextProvider before using this hook');
  }

  return basketContext;
};

interface UseBasketUpdaterProps {
  addPrestations: (prestation: Prestation) => void;
  removePrestation: (prestation: Prestation) => void;
}

export const useBasketUpdater = (): UseBasketUpdaterProps => {
  const setBasket = useContext(BasketContextUpdater);

  if (typeof setBasket === 'undefined') {
    throw new Error('You need to wrap your component with BasketContextProvider before using this hook');
  }

  // TODO refactor plz
  const addPrestations = useCallback((prestation: Prestation) => {
    setBasket(previousBasket => {
      const existingPrestationInBasket = !!previousBasket.prestations?.[prestation.reference];

      if (previousBasket.prestations === undefined || !existingPrestationInBasket) {
        return {
          totalPrice: previousBasket.totalPrice + prestation.price,
          prestations: {
            ...previousBasket.prestations,
            [prestation.reference]: { total: 1, prestation },
          },
        };
      }
      return {
        totalPrice: previousBasket.totalPrice + prestation.price,
        prestations: {
          ...previousBasket.prestations,
          [prestation.reference]: {
            ...previousBasket.prestations[prestation.reference],
            total: previousBasket.prestations[prestation.reference].total + 1,
          },
        },
      };
    });
  }, []);

  const removePrestation = useCallback((prestation: Prestation) => {
    setBasket(previousBasket => {
      const existingPrestationInBasket = !!previousBasket.prestations?.[prestation.reference];

      if (previousBasket.prestations === undefined || !existingPrestationInBasket) return previousBasket;
      const previousTotal = previousBasket.prestations[prestation.reference].total;
      return {
        totalPrice: previousBasket.totalPrice - prestation.price,
        prestations: {
          ...previousBasket.prestations,
          [prestation.reference]: {
            ...previousBasket.prestations[prestation.reference],
            total: previousTotal > 0 ? previousTotal - 1 : 0,
          },
        },
      };
    });
  }, []);

  return { addPrestations, removePrestation };
};
