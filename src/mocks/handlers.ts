import { rest } from 'msw';
import { UNIVERSE } from '../services/routes';
import prestationCatalog from './data-test/prestationsCatalog';

const getPrestationsCatalogMock = rest.get(UNIVERSE, (req, res, ctx) => {
  console.log('COUCOU');
  return res(ctx.status(200), ctx.json(prestationCatalog));
});

export const handlers = [getPrestationsCatalogMock];
