const CURRENCYFORMATTER = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

export function formatCurrency(number: number) {
  return CURRENCYFORMATTER.format(number);
}
