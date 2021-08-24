const getRepos = require('./getRepos');

test('lista de nomes de repositório existe', async () => {
  expect.assertions(2);
  const result = await getRepos('https://api.github.com/orgs/tryber/repos');
  expect(result).toContain('sd-01-week4-5-project-todo-list');
  expect(result).toContain('sd-01-week4-5-project-meme-generator');
});

// Entender porque esse test não passa e entender o que é esse node-fetch.
