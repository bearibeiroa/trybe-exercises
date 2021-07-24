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
