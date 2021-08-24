const { sum } = require('../src/funcs');

describe('Testa que a função sum', () => {
  it('existe', () => {
    expect(typeof sum).toBe('function');
  });

  it('soma 4 mais 5 e retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('soma 0 mais 0 e retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('lança um erro quando recebe uma string como parâmetro', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numbers');
  });
});
