// Exercício 1
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(typeof sum, 'function');
assert.strictEqual(sum(4, 5), 9, 'O somatório de quatro mais cinco deve ser nove');
assert.strictEqual(sum(0, 0), 0, 'O somatório de zero mais zero deve ser zero');
assert.throws(() => {sum(4, "5")});
assert.throws(() => sum(4, "5"), Error('parameters must be numbers'));
