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
      }

testingScope(true);

// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderOddsAndEvens = `Os números ${oddsAndEvens[5]},${oddsAndEvens[1]},${oddsAndEvens[2]},${oddsAndEvens[4]},${oddsAndEvens[3]},${oddsAndEvens[0]} se encontram ordenados de forma crescente!`

const sortedOddsAndEvens = oddsAndEvens.sort((a, b) => a - b);

console.log('-----------------------')

console.log(orderOddsAndEvens);

console.log(sortedOddsAndEvens)

