const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => new Promise((resolve, reject) => {
  const foundAnimal = Animals.find((animal) => animal.name === name);

  return foundAnimal ? resolve(foundAnimal) : reject(new Error('No animal with this name!'));
  });

const getAnimalByName = (name) => findAnimalByName(name);

const findAnimalByAge = (age) => new Promise((resolve, reject) => {
  const foundAnimal = Animals.filter((animal) => animal.age === age);

  return foundAnimal ? resolve(foundAnimal) : reject(new Error('No animal with this age'));
});

const getAnimalByAge = (age) => findAnimalByAge(age);

module.exports = {
  getAnimalByName,
  getAnimalByAge,
};
