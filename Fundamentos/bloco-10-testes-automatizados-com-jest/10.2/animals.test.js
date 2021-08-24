const { getAnimalByAge, getAnimalByName } = require('./animals');

describe('Testing Promise - findAnimalByName', () => {
  describe('When exist the animal with searching name', () => {
    it('should return the animal object', () => {
      expect.assertions(1);
      return getAnimalByName('Dorminhoco')
        .then((animal) => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
    });
  });

  describe('when the searching animal doesnt exist', () => {
    it('should return an error', () => {
      expect.assertions(1);
      return getAnimalByName('Bob')
        .catch((error) => expect(error).toEqual(new Error('No animal with this name!')));
    });
  });
});

describe('Testing Promise - findAnimalByAge', () => {
  describe('when exist the animal with searching age', () => {
    it('should return the animal object', () => {
      expect.assertions(1);
      return getAnimalByAge(2)
        .then((animal) => {
          expect(animal).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
        });
    });
  });

  describe('when the animal with age searching doesnt exist', () => {
    it('return an error', () => getAnimalByAge(10)
        .catch((error) => expect(error).toEqual('No animal with this age')));
  });
});
