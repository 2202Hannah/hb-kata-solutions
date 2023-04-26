// Please do not change the name of this function
const supermarketQueue = (customers, checkouts) => {
  const firstCustomers = [];

  for (let i = 0; i < checkouts; i++) {
    firstCustomers.push(customers[i]);
  }

  for (let i = firstCustomers.length; i < customers.length; i++) {
    firstCustomers.sort((a, b) => a - b);
    firstCustomers[0] += customers[i];
  }
  return Math.max(...firstCustomers);
};

module.exports = { supermarketQueue };
