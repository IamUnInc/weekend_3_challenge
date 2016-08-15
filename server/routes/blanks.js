module.exports.checkBlanks = function(numbers) {
  if (numbers.numOne == '' || numbers.numTwo == '') {
    return true;
  }

  return false;
}
