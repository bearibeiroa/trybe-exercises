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

