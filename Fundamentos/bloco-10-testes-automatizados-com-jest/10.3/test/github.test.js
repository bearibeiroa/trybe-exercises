/* eslint-disable max-lines-per-function */
const fetch = require('node-fetch');

const github = require('../src/github');

const { getRepositoryInfoFromUsername } = github;

jest.mock('node-fetch');

describe('when calling getRepositoryInfoFromUsername function', () => {
  it('should parse the response into an object with name, company, location and twitter',
    async () => {
      expect.assertions(1);

      // vou fornecer uma implementação falsa para a função fetch

      fetch.mockImplementation(async () => ({ json: async () => ({
        name: 'Beatriz Ribeiro',
        bio: 'Estudante Desenvolvimento Web | Trybe',
        twitter_username: 'bea_ribeiroa',
        location: 'Lisboa',
      }),
      }));
      const repositoryInfo = await getRepositoryInfoFromUsername('bearibeiroa');
      expect(repositoryInfo).toEqual({
        name: 'Beatriz Ribeiro',
        bio: 'Estudante Desenvolvimento Web | Trybe',
        twitter: 'bea_ribeiroa',
        location: 'Lisboa',
      });
    });
});
