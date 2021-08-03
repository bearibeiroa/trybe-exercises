const assert = require('assert');

const sumAllNumbers = (array) => {
  // Com reduce
  let output = array.reduce(function (soma, index) {
    return soma + index
  });
  //Com for/in
  // for (index in array){
  //   output += array[index];
  // }
  return output;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
