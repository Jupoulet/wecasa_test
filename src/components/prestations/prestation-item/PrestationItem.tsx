import { Prestation } from '../../../models/Prestations';
import { FC, ReactNode } from 'react';
import './PrestationItem.css';
import { minutesAndHoursToFormattedDuration, minutesToHours } from '../../../utils/time/time';
import { centsToEuro } from '../../../utils/monney/monney';

interface PrestationItemProps extends Prestation {
  children?: ReactNode;
}

export const PrestationItem: FC<PrestationItemProps> = ({ title, duration, price, children }) => {
  const minutesAndHours = minutesToHours(duration);
  return (
    <article className="PrestationItem">
      <div className="PrestationItem-informations">
        <p>
          <strong>Nom: {title}</strong>
        </p>
        <p>Durée: {minutesAndHoursToFormattedDuration(minutesAndHours)}</p>
        <p>Prix: {centsToEuro(price)}€</p>
      </div>
      {children}
    </article>
  );
};
