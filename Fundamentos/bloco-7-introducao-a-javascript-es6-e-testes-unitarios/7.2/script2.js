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

const totalNumeroEstudantes = (allLessons) => {
  const array = Object.keys(allLessons)
  total = 0;
  for (index in array) {
    const currentKey = array[index];
    total += allLessons[currentKey].numeroEstudantes
  }
  return total;
}
console.log(totalNumeroEstudantes(allLessons));

// Exercício 7

const getValueByNumber = (obj, position) => Object.values(obj)[position];

console.log(getValueByNumber(lesson1, 0));

// Exercício 8

const verifyPair = (obj, key, value) => {
  const pair = Object.entries(obj);
  let equal = false;
  for (index in pair) {
    if (pair[index][0] === key && pair[index][1] === value) equal = true
  }
  return equal
  }

console.log(verifyPair(lesson3, 'turno', 'noite'));

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// Bônus - exercício 1

const mathStudents = (obj) => {
  const array = Object.keys(obj);
  let contador = 0;
  for (index in array) {
    const currentValue = obj[array[index]].materia;
    if (currentValue === 'Matemática') {
      contador += obj[array[index]].numeroEstudantes;
    }
  }
  return contador;
}

console.log(mathStudents(allLessons))

// Bônus - exercício 2

const createInfo = (obj, prof) => {
  const array = Object.values(obj);
  const allLessons = [];
  let totalStudent = 0;
  for (index in array) {
    if (array[index].professor === prof) {
      allLessons.push(array[index].materia);
      totalStudent += array[index].numeroEstudantes;
    }
  }
  return { aulas: allLessons, estudantes: totalStudent}
}

const createReport = (allLessons, prof) => {
  const relatorio = {};
  relatorio.professor = prof;
  Object.assign(relatorio, createInfo(allLessons, prof));
  return relatorio;
}

console.log(createReport(allLessons, 'Maria Clara'))

