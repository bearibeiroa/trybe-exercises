// Exercício 1
// fatorial de um número significa n! = n * (n -1) * (n - 2) * ... 1

const factorNum = number => {
  let result = 1;
    for (let index = 1; index <= number; index += 1){
      result *= index;
    }
  return result;
  }
console.log(factorNum(6));

// Recursiva
// Função recursiva é quando uma função chama a si mesma dentro do próprio bloco de código.
const recursiveFunc = num => num > 1 ? num * recursiveFunc(num - 1) : 1;
console.log(recursiveFunc(6))

// Exercício 2
// Em uma variável a string é tranformada em array com array.split(); É criada uma variável para guardar a maior palavra, uma para ser um contador e outra para guardar o resultado.
// Através do for/of o array de substrings é percorrido e a cada volta é feita a comparação do tamanho da palavra(index) com o contador.
// Se o tamanho da palavra for maior do que o contador, a maior palavra vai ser atribuída ao index.length e o resultado será o próprio index.

const longestWord = string => {
  const lengthString = string.split(' ');
  let biggestWord = '';
  let biggestLength = 0;
  let resultWord = '';

  for (word of lengthString) {
    if (word.length > biggestLength) {
      biggestWord = word.length;
      resultWord = word;
    }
  }
  return word;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))


// Solução com sort()
// Transformar a string em um array e ordenadar do maior para o menor, e retornar a primeira posição do array ordenado

const longestWord2 = string2 => {
  const biggestWord2 = string2.split(' ').sort((a, b) => b.length - a.length);
  return biggestWord2[0];
}
console.log(longestWord2('Antônio foi no banheiro e não sabemos o que aconteceu'))
