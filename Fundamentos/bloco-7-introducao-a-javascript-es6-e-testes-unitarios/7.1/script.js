/* Exercício 1 */
const testingScope = escopo => {
        if (escopo === true) {
          let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
          console.log(ifScope);
        } else {
          const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      }

      testingScope(true);

/* Exercício 2 */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ascendentNumber = oddsAndEvens.sort((a, b) => a - b);
const string = `Os números ${ascendentNumber} se encontram ordenados de forma crescente!`;
console.log(string); // será necessário alterar essa linha 😉


