/* 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem. */

const getUserName = require('./getUserName');

describe('testa a função getUserName', () => {
  test('existe ', () => {
    expect(typeof getUserName).toBe('function');
  });

  test('quando o usuário é encontrado ', () => {
    expect.assertions(1);
    getUserName(1).then((user) => {
      expect(user).toBe('Mark');
    });
  });

  test('retorna um erro quando usuário não é encontrado', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => expect(error.message)
      .toMatch('User with 3 not found'));
  });
});

/* 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
Dica: Utilize o try/catch para o caso de erro. */

describe('Refatora teste com try/catch', () => {
  test('quando usuário é encontrado', async () => {
    const data = await getUserName(2);
    expect(data).toEqual('Paul');
  });

  test('retorna um erro quando usuário não é encontrado', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error.message)
        .toMatch('User with 3 not found');
    }
  });
});
