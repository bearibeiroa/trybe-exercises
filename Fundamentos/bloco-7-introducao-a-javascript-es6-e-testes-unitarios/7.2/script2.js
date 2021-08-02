const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1

const newElement = (obj, key, value) => {
	obj[key] = value;
	return obj;
}
console.log(newElement(lesson2,'turno','manhã'));

// Exercício 2

const objListed = (obj) => {
	obj = Object.keys(lesson1);
	return obj;
}
console.log(objListed(lesson1));

// Exercício 3

const objLength = (obj) => {
	obj = Object.keys(obj).length;
	return obj;
}
console.log(objLength(lesson1));

//Exercício 4

const objValue = (obj) => {
	obj = Object.values(obj);
	return obj;
}
console.log(objValue(lesson2));

// Exercício 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Exercício 6

const studentOne = allLessons.lesson1.numeroEstudantes;
const studenteTwo = allLessons.lesson2.numeroEstudantes;
const studentThree = allLessons.lesson3.numeroEstudantes;
const totalNumeroEstudantes = (allLessons) => {
	return studentOne + studenteTwo + studentThree;
}
console.log(allLessons);

// Exercício 7

const getValueByNumber = (obj, position) => Object.values(obj)[position];

console.log(getValueByNumber(lesson1, 0));

// Exercício 8

const verifyPair = (obj, key, value) => {
  const array = Object.entries(obj);
  let equal = false;
  for (index in array) {
    if (array[index][0] === key && array[index][1] === value) equal = true
  }
  return equal
  }

console.log(verifyPair(lesson3, 'turno', 'noite'));

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

