const random = require('../src/randomNum');

test('função e suas chamadas', () => {
  random.randomNumber = jest.fn().mockReturnValue(10);

  expect(random.randomNumber()).toBe(10);
  expect(random.randomNumber).toHaveBeenCalled();
  expect(random.randomNumber).toHaveBeenCalledTimes(1);
});
