// eslint-disable-next-line import/no-unresolved
const sum = require('../src/sum');

it('testa que a função sum existe', () => {
  expect(typeof sum).toBe('function');
});
