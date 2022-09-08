import { useQuery } from '@tanstack/react-query';
import { getPrestationsCatalog } from '../services/prestations';
import { GETPrestationsResponse } from '../services/prestations.types';

interface UsePresationsCatalogProps {
  prestations?: GETPrestationsResponse;
  status: 'error' | 'success' | 'loading';
}

export const usePrestationsCatalog = (): UsePresationsCatalogProps => {
  const { data, status } = useQuery(['prestations'], getPrestationsCatalog);

  return { prestations: data, status };
};
