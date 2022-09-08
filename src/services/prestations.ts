import { UNIVERSE } from './routes';
import { GETPrestationsResponse } from './prestations.types';

export const getPrestationsCatalog = async (): Promise<GETPrestationsResponse> => {
  const result = await fetch(UNIVERSE);

  if (result.ok) {
    return result.json();
  }

  throw new Error(result.statusText);
};
