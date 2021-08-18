const { encode, decode } = require('../src/funcs.js');

describe('A função encode', () => {

  test('Existe', () => {
    expect(typeof encode).toEqual('function');
  });

});

describe('A função decode', () => {

  test('Existe', () => {
    expect(typeof decode).toEqual('function');
  });

});
