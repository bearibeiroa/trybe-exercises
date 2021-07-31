const factorNum = number => {
  for (let index = 1; index <= number; index += 1){
    return number *= index;
  }
}
console.log(factorNum(5));
