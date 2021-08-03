# Exercício 7.3

## Praticando a implementação de testes - Parte 1


1. A função sum(a, b) retorna a soma do parâmetro a com o b
[x] Teste se o retorno de sum(4, 5) é 9
[x] Teste se o retorno de sum(0, 0) é 0
[x] Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
[x] Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

``` javascript

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

```

2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

[x] Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
[x] Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
[x] Verifique se o array passado por parâmetro não sofreu alterações
[x] Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

```javascript

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

```

3. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array

[x] Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
[x] Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
[x] Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
[x] Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

``` javascript
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

```

4. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

[x] Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
[x] Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
[x] Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
[x] Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
[x] Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

```javascript
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

```

5. Compare dois objetos para verificar se são idênticos ou não

```javascript
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

```

## Praticando TDD - Parte 2

**Escrevendo código para testes**

Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. **É importante nunca alterar os testes ou as variáveis já escritas no código** :
Copie os testes já implementados e desenvolva as funções. Separe as funções em arquivos para evitar qualquer tipo de problema.

1. Escreva a função addOne para passar nos testes já implementados.

```javascript

const assert = require('assert');
// escreva a função addOne aqui

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

```

2. Escreva a função wordLengths para passar nos testes já implementados.

```javascript

const assert = require('assert');
// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

```

3. Escreva a função sumAllNumbers para passar nos testes já implementados.

```javascript

const assert = require('assert');
// escreva a função sumAllNumbers aqui

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

```

4. Escreva a função findTheNeedle para passar nos testes já implementados.

```javascript

const assert = require('assert');
// escreva a função findTheNeedle aqui

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
```
