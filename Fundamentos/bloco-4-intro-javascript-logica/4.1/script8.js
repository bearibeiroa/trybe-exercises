//Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

let numberA = 6;
let numberB = 11;
let numberC = 34;


if (numberA % 2 === 0 || numberB % 2 === 0 || numberC % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}