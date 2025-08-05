module.exports = function reverse(n) {
  const array = n.toString().split('').reverse();
  const string = array.toString();
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ',') {
      newString += string[i];
    }
  }
  const number = Number(newString);
  return number;
}
