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

const expected = myRemove([1, 2, 3, 4], 3)
const list = [5, 6, 7, 8];
console.log(myRemove(list, 5));


// implemente seus testes aqui
assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(expected, [1, 2, 4]);
assert.notStrictEqual(expected, [1, 2, 3, 4]);
assert.deepStrictEqual(list, [5, 6, 7, 8]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
