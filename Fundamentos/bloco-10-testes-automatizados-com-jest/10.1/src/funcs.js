const sum = (a, b) => {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') {
    throw new Error('parameters must be numbers');
  };
  return a + b;
};

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

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

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

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

// Parte II
function encode(string) {
  const stringEncode = string.split('')
    .map((letter) => {
      if (letter === 'a') return '1';
      if (letter === 'e') return '2';
      if (letter === 'i') return '3';
      if (letter === 'o') return '4';
      if (letter === 'u') return '5';
      return letter;
    }).join('');
  return stringEncode;
}

function decode(string) {
  const stringDecode = string.split('')
    .map((letter) => {
      if (letter === '1') return 'a';
      if (letter === '2') return 'e';
      if (letter === '3') return 'i';
      if (letter === '4') return 'o';
      if (letter === '5') return 'u';
      return letter;
    }).join('');
  return stringDecode;
}

function techList(techList, name) {
    let arrayList = [];
    techList.sort();
    if (techList.length === 0) {
        return "Vazio!";
    }
    for (index = 0; index < techList.length; index += 1) {
        let objectList = {
            tech: '',
            name: name,
        };
        objectList.tech = techList[index];
        arrayList.push(objectList);
    }

    return arrayList;
}



module.exports = {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
  obj1,
  obj2,
  obj3,
  encode,
  decode,
  techList,
};
