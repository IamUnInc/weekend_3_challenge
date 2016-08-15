module.exports.addThem = function(numbers) {
  a = parseInt(numbers.numOne);
  b = parseInt(numbers.numTwo);
  console.log(a);
  console.log(b);
  added = a + b;
  return added;
}

module.exports.subThem = function(numbers) {
  a = parseInt(numbers.numOne);
  b = parseInt(numbers.numTwo);
  console.log(a);
  console.log(b);
  subtracted = a - b;
  return subtracted;
}

module.exports.multThem = function(numbers) {
  a = parseInt(numbers.numOne);
  b = parseInt(numbers.numTwo);
  console.log(a);
  console.log(b);
  multiplied = a * b;
  return multiplied;
}

  module.exports.divThem = function(numbers) {
    a = parseInt(numbers.numOne);
    b = parseInt(numbers.numTwo);
    console.log(a);
    console.log(b);
    devided = a / b;
    return devided;
  }
