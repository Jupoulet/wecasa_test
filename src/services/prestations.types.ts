import { Prestation } from '../models/Prestations';
import { Reference, Title } from '../models/Utils';

export interface Category {
  reference: Reference;
  title: Title;
  prestations: Prestation[];
}

export interface GETPrestationsResponse {
  categories: Category[];
  reference: Reference;
  title: Title;
}
