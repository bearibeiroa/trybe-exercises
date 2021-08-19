const { sum } = require('../src/funcs.js');

describe('testa função de soma', () => {

  test('4 mais 5 igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('0 mais 0 igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  // A função que lança uma exceção precisa ser chamada dentro de uma função de embrulho, caso contrário a afirmação toThrow falhará.

  test('lança erro quando uma string é passada', () => {
    expect(() => { sum(4, "5") }).toThrow()
  });

  test('lança mensagem de erro', () => {
    expect(() => { sum(4, "5") }).toThrow('parameters must be numbers')

  });

});

