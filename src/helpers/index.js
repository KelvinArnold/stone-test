import { createNumberMask, createTextMask } from 'redux-form-input-masks';
// Some helpers
const randNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}
const generateToken = () => {
  let min = Math.ceil(100000);
  let max = Math.floor(999999);
  return randNumber(min, max).toString() + randNumber(min, max);
};
// Mask
const cpfMask = createTextMask({
  pattern: '999.999.999-99'
});
const cepMask = createTextMask({
  pattern: '99999999'
});
const cardMask = createTextMask({
  pattern: '9999 9999 9999 9999'
});
const cardDateMask = createTextMask({
  pattern: '99/9999'
});
const cardCvvMask = createTextMask({
  pattern: '999'
});
const currencyMask = createNumberMask({
  prefix: 'R$ ',
  decimalPlaces: 2,
  locale: 'pt-BR',
})
export {
  randNumber,
  generateToken,
  cpfMask,
  cepMask,
  cardMask,
  cardDateMask,
  cardCvvMask,
  currencyMask
};