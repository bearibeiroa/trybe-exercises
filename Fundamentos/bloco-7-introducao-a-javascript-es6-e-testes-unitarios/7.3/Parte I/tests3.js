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
// console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3));

const list = [1, 2, 3, 4]

// implemente seus testes aqui
assert.strictEqual(typeof myRemoveWithoutCopy, 'function');
assert.notStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
myRemoveWithoutCopy(list, 3)
assert.strictEqual(list.length, 3);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
