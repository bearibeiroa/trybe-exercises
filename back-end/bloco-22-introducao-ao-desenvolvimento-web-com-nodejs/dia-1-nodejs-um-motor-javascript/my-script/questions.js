const { question, questionFloat } = require('readline-sync');

const askName = () => {
  return question('Qual o seu nome? ');
};

const askWeight = () => {
  return questionFloat('Qual o seu peso? ');
};

const askHeight = () => {
  return questionFloat('Qual a sua altura? ');
};

module.exports = {
  askName,
  askWeight,
  askHeight,
};
