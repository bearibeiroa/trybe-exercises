const { uppercase } = require('../src/funcs.js');
const { it } = require('@jest/globals');

it('uppercase "test" to equal "TEST"', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});
