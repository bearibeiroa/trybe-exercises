const { findUserById, getUserName } = require('../src/funcs.js');
const { it, expect } = require('@jest/globals');

describe('verifica resultado da função getUserName', () => {
  it('encontra usuário', () => {
    findUserById(2).then((listUser) => {
      expect(listUser.name).toEqual('Mark');
    });
  });
});

describe('testa o retorno de erro', () => {
  it('retorns mensagem de erro', (done) => {
    findUserById('retorna erro', () => {
      try {
        expect(3).toBe('User with 3 not found.')
        done();
      } catch (error) {
        done(error);
      }
    })
  })
})
