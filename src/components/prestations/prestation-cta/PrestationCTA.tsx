import React, { FC } from 'react';
import { Prestation } from '../../../models/Prestations';
import { useBasket, useBasketUpdater } from '../../../contexts/BasketContext';
import './PrestationCTA.css';

interface PrestationCTAProps {
  prestation: Prestation;
}

export const PrestationCTA: FC<PrestationCTAProps> = ({ prestation }) => {
  const { addPrestations, removePrestation } = useBasketUpdater();
  const { prestations } = useBasket();

  const handleAddPrestation = (prestation: Prestation) => () => addPrestations(prestation);
  const handleRemovePrestation = (prestation: Prestation) => () => removePrestation(prestation);

  return (
    <div className="PrestationCTA">
      <button onClick={handleAddPrestation(prestation)}>+</button>
      {prestations?.[prestation.reference]?.total ? (
        <>
          <span className="PrestationCTA-total">{prestations[prestation.reference].total}</span>
          <button className="PrestationCTA-remove" onClick={handleRemovePrestation(prestation)}>
            -
          </button>
        </>
      ) : null}
    </div>
  );
};
