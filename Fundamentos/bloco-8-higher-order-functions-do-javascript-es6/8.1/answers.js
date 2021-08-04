const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answers = (gabarito, respostas, funcheck) => {
  let count = 0;

  for (index of gabarito) {
    const checked = funcheck(gabarito[index], respostas[index]);
    count += checked;
  }
  return `Resultado final: ${count} corretas`;
}

console.log(answers(RIGHT_ANSWERS, STUDENT_ANSWERS, (certas, estudante) => {
  if (certas === estudante) {
    return 1;
  } if (estudante === 'N.A') {
    return 0;
  }
  return -0.5;
}));
