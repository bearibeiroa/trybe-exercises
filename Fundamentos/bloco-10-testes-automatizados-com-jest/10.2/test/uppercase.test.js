/* eslint-disable no-undef */
const uppercase = require('../src/uppercase');

describe('Testa a função uppercase', () => {
  it('uppercase "test" to equal "TEST"', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});
});
