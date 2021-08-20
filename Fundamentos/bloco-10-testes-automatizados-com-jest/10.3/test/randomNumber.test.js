const randomNumber = require('../src/randomNumber')

describe('testa randomNumber', () => {
  it('existe', () => {
    expect(typeof randomNumber).toEqual('function');
  });
});
