const uppercase = require('./uppercase')

describe('verify uppercase callback function', () => {
  it('transform string to uppercase', (done) => {
    uppercase('isso é uma string', (callback) => {
      try {
        expect(callback).toBe('ISSO É UMA STRING');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
