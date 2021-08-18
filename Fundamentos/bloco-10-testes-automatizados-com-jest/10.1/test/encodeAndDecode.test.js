const { encode, decode } = require('../src/funcs.js');

describe('A função encode e decode', () => {

  test('Existe', () => {
    expect(typeof encode).toEqual('function');
  });

  test('as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  })

  test('letras/números não são convertidos para cada caso', () => {
    expect(encode('hi there!')).toBe('h3 th2r2!');
    expect(encode('Vamo que Vamo!')).toBe('V1m4 q52 V1m4!');
    expect(encode('Go Trybe!')).toBe('G4 Tryb2!');
  })

  test('a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('hi there!').length).toBe(9)

  })

});

describe('A função decode', () => {

  test('Existe', () => {
    expect(typeof decode).toEqual('function');
  });

  test('os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente' , () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  })

  test('letras/números não são convertidos para cada caso', () => {
    expect(decode('h3 th2r2!')).toBe('hi there!');
    expect(decode('V1m4 q52 V1m4!')).toBe('Vamo que Vamo!');
    expect(decode('G4 Tryb2!')).toBe('Go Trybe!');
  })

  test('a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('h3 th2r2!').length).toBe(9)

  })

});
