import { centsToEuro } from './monney';

describe('monney', () => {
  it('Converts a given amount of monney in cents to euro', () => {
    const amountInCents = 4290;
    const amountInEuro = centsToEuro(amountInCents);

    expect(amountInEuro).toEqual('42.90');
  });
});
