const questions = require('./questions');
const imc = require('./imc');
const { printOut } = require('./output');

//pergunta o nome
const name = questions.askName();

//pergunta a altura(em m)
const height = questions.askHeight();

//pergunra o peso(em kg)
const weight = questions.askWeight();

//calcular o IMC pela fórmula padrão
const userIMC = imc(weight, height);

// imprime na tela o nome e o IMC
printOut(name, userIMC);
