const { writeFileSync } = require('fs');

module.exports = {
  printOut: (name, userIMC) =>
    writeFileSync(
      './output.txt',
      `O IMC de ${name} é ${userIMC.toFixed(2)}.\n`
    ),
};
