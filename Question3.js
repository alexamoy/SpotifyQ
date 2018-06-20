
function changePossibilities(amount, denominations) {
  if (denominations.sort()[0] === amount) return 1;
  if (amount === 0) { return 1; }
  if (amount < 0) { return 0; }

  for (let i = 0; i < denominations.length; i++) {
    return 1 + changePossibilities(amount - denominations[i], denominations);
  }
}
console.log(changePossibilities(4, [1, 2, 3]));
module.exports = changePossibilities;
