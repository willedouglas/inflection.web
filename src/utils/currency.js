const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});

const currencyFormat = (value) => formatter.format(value);

export {
  currencyFormat,
};
