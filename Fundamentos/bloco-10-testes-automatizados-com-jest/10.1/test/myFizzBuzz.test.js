const { myFizzBuzz } = require('../src/funcs.js');

describe('A função myFizzBuzz', () => {

  test('Existe', () => {
    expect(typeof myFizzBuzz).toEqual('function');
  });

  test('chamada com um número divisível por 3 e 5 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  test('chamada com um número divisível por 3 retorna fizz', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });

  test('chamada com um número divisível por 5 retorna buzz', () => {
    expect(myFizzBuzz(25)).toEqual('buzz');
  });

  test('chamada com um número que não é divisível por 3 ou 5 retorna o próprio número', () => {
    expect(myFizzBuzz(13)).toEqual(13);
  });

  test('chamada com um parâmetro que não é um número retorna false', () => {
    expect(myFizzBuzz('17')).toEqual(false);
  });

});
