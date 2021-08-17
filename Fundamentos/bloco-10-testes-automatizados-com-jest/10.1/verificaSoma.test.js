const sum = require('./verificaSoma');

describe('Requisito 1', () => {
  it('A função recebe sum(4,5) e a soma é 9', () => {
    expect(sum(4, 9).toEqual(9));
  });
})
