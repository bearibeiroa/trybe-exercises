const { myRemove } = require('../src/funcs.js');

describe('A função myRemove', () => {
  test('Existe', () => {
    expect(typeof myRemove).toEqual('function');
  });
});
