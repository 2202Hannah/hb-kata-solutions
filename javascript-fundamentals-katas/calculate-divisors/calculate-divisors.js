// Please do not change the name of this function
function calculateDivisors(num) {
  let totalSumOfDivisors = 0;
  for (let i = num - 1; i > 0; i--) {
    if (i % 3 === 0) {
      totalSumOfDivisors += i;
    }
    if (i % 5 === 0) {
      totalSumOfDivisors += i;
    }
  }
  return totalSumOfDivisors;
}

module.exports = calculateDivisors;
