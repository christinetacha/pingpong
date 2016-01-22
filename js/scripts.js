var divisibleBy = function(number) {
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
  if (number % 5 === 0) {
    return true;
  } else {
    return false;
  }
  if (number % 3 === 0 && number % 5 === 0) {
    return true;
  } else {
    return false;
  }
};
