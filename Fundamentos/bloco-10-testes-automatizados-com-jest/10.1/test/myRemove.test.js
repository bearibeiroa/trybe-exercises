const { myRemove } = require('../src/funcs.js');

describe('A função myRemove', () => {

  test('Existe', () => {
    expect(typeof myRemove).toEqual('function');
  });

  test('com ([1, 2, 3, 4], 3) retorna 3', () => {

    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);

  })
});
