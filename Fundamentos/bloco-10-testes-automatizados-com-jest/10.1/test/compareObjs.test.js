const { obj1, obj2, obj3, } = require('../src/funcs.js');

describe('', () => {

  test('obj1 e obj2 são iguais', () => {
    //toBe utiliza Object.is para testar a igualdade exata. Se você quer checar o valor de um objeto, use toEqual.
    expect(obj1).toEqual(obj2)
    // expect(obj1 === obj2).toEqual(true) - Pq esse não funciona?
    expect(obj1).not.toEqual(obj3);
    expect(obj2).toEqual(obj1);
    expect(obj2).not.toEqual(obj3);
    expect(obj3).not.toEqual(obj1);
    expect(obj3).not.toEqual(obj2);
  });
});
