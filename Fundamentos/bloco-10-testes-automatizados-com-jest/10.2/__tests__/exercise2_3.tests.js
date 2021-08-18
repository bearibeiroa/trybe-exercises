const { findUserById, getUserName } = require('../src/funcs.js');
const { it, expect } = require('@jest/globals');

describe('verifica resultado da função getUserName', () => {
  it('encontra usuário', () => {
    findUserById(1).then((listUser) => {
      expect(listUser.name).toEqual('Mark');
    });
  });
});

describe('testa o retorno de erro', () => {
  findUserById('', () => {
    try {
      
    } catch {

    }
  })
})
