const { myFizzBuzz } = require('../src/funcs');

describe('A função myFizzBuzz', () => {
  it('existe', () => {
    expect(typeof myFizzBuzz).toBe('function');
  });

  it('chamada com um número divisível por 3 e 5 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('chamada com um número divisível por 3 retorna fizz', () => {
    expect(myFizzBuzz(12)).toEqual('fizz');
  });

  it('chamada com um número divisível por 5 retorna buzz', () => {
    expect(myFizzBuzz(25)).toEqual('buzz');
  });

  it('chamada com um número divisível por 3 e 5 retorna o próprio número', () => {
    expect(myFizzBuzz(13)).toEqual(13);
  });

  it('chamada com um número divisível por 3 e 5 retorna o próprio número', () => {
    expect(myFizzBuzz('not a number')).toEqual(false);
  });
});
