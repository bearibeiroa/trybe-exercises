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

// Questão 1
const newElement = (obj, key, value) => {
	obj[key] = value;
	return obj;
}
console.log(newElement(lesson2,'turno','manhã'));

// Questão 2

const objListed = (obj) => {
	obj = Object.keys(lesson1);
	return obj;
}
console.log(objListed(lesson1));

// Questão 3

const objLength = (obj) => {
	obj = Object.keys(obj).length;
	return obj;
}
console.log(objLength(lesson1));

//Questão 4

const objValue = (obj) => {
	obj = Object.values(obj);
	return obj;
}
console.log(objValue(lesson2));

// Questão 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

