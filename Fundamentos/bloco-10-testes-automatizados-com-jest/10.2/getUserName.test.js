/* 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem. */

const getUserName = require('./getUserName');

describe('testa a função getUserName', () => {
  test('existe ', () => {
    expect(typeof getUserName).toBe('function');
  });

  test('quando o usuário é encontrado ', () => getUserName(1)
      .then((user) => {
        expect(user).toBe('Mark');
      }));

  test('retorna um erro quando usuário não é encontrado', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => expect(error.message)
      .toMatch('User with 3 not found'));
  });
});
