

// let counter = 0;
// let sorted = denominations.sort();
// let total = sorted[sorted.length - 1];
// for (let i = sorted.length - 1; i > -1; i--) {
//   while (total < amount) {
//     total += sorted[i];
//   }
//   if (total === amount) {
//     counter++;
//   }
// }
// if (sorted.length === 1) return counter;
// return counter + changePossibilities(amount, sorted.slice(0, sorted.length - 1));

function changePossibilities(amount, denominations) {
  if (denominations[0] === amount) return 1;
  if (amount === 0) { return 1; }
  if (amount < 0) { return 0; }

  for (let i = 0; i < denominations.length; i++) {
    return 1 + changePossibilities(amount - denominations[i], denominations);
  }
}
console.log(changePossibilities(4, [1, 2, 3]))
module.exports = changePossibilities;
