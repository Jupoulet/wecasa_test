import { useBasket } from '../../../contexts/BasketContext';
import { minutesAndHoursToFormattedDuration, minutesToHours } from '../../../utils/time/time';
import { centsToEuro } from '../../../utils/monney/monney';
import './BasketOverview.css';

export const BasketOverview = () => {
  const { totalPrice, totalDuration } = useBasket();
  const minutesAndHours = minutesToHours(totalDuration);
  return (
    <button className="BasketOverview">
      Total: {centsToEuro(totalPrice)}€ - {minutesAndHoursToFormattedDuration(minutesAndHours)}
    </button>
  );
};
