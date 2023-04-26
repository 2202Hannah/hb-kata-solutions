// Please do not change the name of this function
function calculateDivisors(num) {
  let total = 0;
  for (let i = num - 1; i > 0; i--) {
    if (i % 3 === 0) {
      total += i;
    }
    if (i % 5 === 0) {
      total += i;
    }
  }
  return total;
}

module.exports = calculateDivisors;
