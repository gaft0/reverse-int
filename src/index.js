module.exports = function reverse(n) {
  let count;
  let positiveN;
  if (n < 0) {
    count = 1;
    positiveN = Math.abs(n);
  } else {
    count = 0;
    positiveN = n;
  }
  const array = positiveN.toString().split('').reverse();
  const string = array.toString();
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ',') {
      newString += string[i];
    }
  }
  const number = Number(newString);
  if (count === 1) {
    return number;
  }
  return number;
};
