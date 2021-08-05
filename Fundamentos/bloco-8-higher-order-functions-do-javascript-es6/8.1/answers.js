const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checker = (param1, param2) => {
  let nota = 0;
  for (index in param1) {
    if (param2 !== 'N.A.') {
      (param1[index] === param2[index]) ? nota += 1 : nota -= 0.5
    }
  }
  return nota;
}

const examScore = (gabarito, respostas, callback) => {
  const result = callback(gabarito, respostas);
  return `A pessoa estudante acertou ${result} questões`;
}

console.log(examScore(RIGHT_ANSWERS,STUDENT_ANSWERS,checker));
