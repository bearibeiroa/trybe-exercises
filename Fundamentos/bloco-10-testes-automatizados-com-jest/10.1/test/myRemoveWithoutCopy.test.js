const { myRemoveWithoutCopy } = require('../src/funcs');

describe('A função myRemoveWithoutCopy', () => {
  it('existe', () => {
    expect(typeof myRemoveWithoutCopy).toBe('function');
  });

  it('should receive [1, 2, 3, 4], 3 and return [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('should receive [1, 2, 3, 4], 3 and do not return [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('should change original array', () => {
    const array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 2);
    expect(array).toEqual([1, 3, 4]);
  });

  it('should receive myRemoveWithoutCopy([1, 2, 3, 4], 5) and return [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
