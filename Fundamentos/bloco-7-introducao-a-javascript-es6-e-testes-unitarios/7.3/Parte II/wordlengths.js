const assert = require('assert');
const wordLengths = (array) => {
  let output = [];
  for (index in array) {
    output.push(array[index].length)
  }
  return output;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
