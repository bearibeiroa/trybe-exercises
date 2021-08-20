const { myRemove } = require('../src/funcs');

describe('Testa se a função myRemove', () => {
  it('existe', () => {
    expect(typeof myRemove).toBe('function');
  });

  it('com a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('com a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});
