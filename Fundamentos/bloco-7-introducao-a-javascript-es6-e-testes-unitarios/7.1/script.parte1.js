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

// Com template literals
const orderOddsAndEvens = `Os números ${oddsAndEvens[5]},${oddsAndEvens[1]},${oddsAndEvens[2]},${oddsAndEvens[4]},${oddsAndEvens[3]},${oddsAndEvens[0]} se encontram ordenados de forma crescente!`

// Com array.sort()
const sortedOddsAndEvens = oddsAndEvens.sort((a, b) => a - b);

console.log('-----------------------');
console.log(orderOddsAndEvens);
console.log(sortedOddsAndEvens);


// Resolução pelo gabarito
// Observo que a proposta do gabarito é mais organizada do que a minha. Isso significa que preciso organizar o código em const e funções para ser mais legível.

// Com template literals
const orderOddsAndEvens2 = () => {
  oddsAndEvens[0] = 2
  oddsAndEvens[1] = 3
  oddsAndEvens[2] = 4
  oddsAndEvens[3] = 7
  oddsAndEvens[4] = 10
  oddsAndEvens[5] = 13

  return oddsAndEvens;
}

const resultOrderOddsAndEvens2 = orderOddsAndEvens2();
console.log('-----------------------')
console.log(`Os números ${resultOrderOddsAndEvens2} se encontram ordenados de forma crescente!`)

// Com array.sort()

const sortOddsAndEvens2 = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}

const sortedOddsAndEvens2 = sortOddsAndEvens2(oddsAndEvens);
console.log('-----------------------')
console.log(`Os números ${sortedOddsAndEvens2} se encontram ordenados de forma crescente!`)

// Array.sort com sort em uma linha

console.log('-----------------------')
console.log(`Os números ${oddsAndEvens.sort((a,b) => a - b)} se encontram ordenados de forma crescente!`)
