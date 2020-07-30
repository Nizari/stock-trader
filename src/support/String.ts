export const currency = (value: number, currencyLabel: 'EUR' | 'USD') => {
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: currencyLabel } as Intl.NumberFormatOptions).format(value);
};
