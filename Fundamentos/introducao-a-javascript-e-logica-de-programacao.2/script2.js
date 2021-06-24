//Some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
}
console.log(result)


//  1 - A variável 'let result' foi criada para armazenar a soma dos elementos da array declarada. Depois foi criado um laço 'for'para percorrer a array até o tamanho total da array e incrementando 1 a cada elemento. Depois foi criado a soma de modo que tudo que tem em result seja somado a mais um elemento de index.