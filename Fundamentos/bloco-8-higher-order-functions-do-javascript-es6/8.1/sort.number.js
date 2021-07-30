// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// Cria número aleatório entre 1 e 5
const randomNum = () => {
  return Math.floor(Math.random() * 5 + 1)
}

//Compara o número escolhido com o sorteado e retorna msg
const sortResult = (number, randomNum) => {
  if (number === randomNum) {
    return `Número sorteado: ${randomNum}. Parabéns você ganhou`;
  } else {
    return `Número sorteado: ${randomNum}.Tente novamente`;
  }
}
console.log(sortResult(3, randomNum()));




// Math.ceil() => retorna o menor número inteiro ou igual a x
// Math.random() => retorna um número aleatório no intervalo entre [0, 1]
// Math.random() * 5 + 1 => inteiros aleatórios no intervalo entre [1, 5]
