const { myRemoveWithoutCopy } = require('../src/funcs.js');

describe('A função myRemoveWithoutCopy', () => {

  test('Existe', () => {
    expect(typeof myRemoveWithoutCopy).toEqual('function');
  });

  test('a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })

  test('a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  test('o array não sofreu alteração', () => {
    const arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 3);
    expect(arr).not.toEqual([1, 2, 3, 4])
  });

  test('a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).not.toBe([1, 2, 3, 4]);
  })

});
