const sum = require('./src/test');

test('soma dois valores', () => {
  expect(sum(2, 3)).toBe(5);
})
