const { myRemove } = require('../src/funcs.js');

describe('A função myRemove', () => {

  test('Existe', () => {
    expect(typeof myRemove).toEqual('function');
  });

  test('com ([1, 2, 3, 4], 3) retorna 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('com ([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
  })

  // Não entendi como resolver esse
  test('o array não sofreu alteração', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 3);
    expect(arr).toEqual([1, 2, 3, 4])
  });

  test('a chamada myRemove([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

});
