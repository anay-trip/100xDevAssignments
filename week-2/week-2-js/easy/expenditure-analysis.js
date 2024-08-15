/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  // Create a map with category as key and total spent as value
  let map = new Map();
  for (let transaction of transactions) {
    if (map.has(transaction.category)) {
      map.set(transaction.category, map.get(transaction.category) + transaction.price);
    } else {
      map.set(transaction.category, transaction.price);
    }
  }

  let result = [];
  for (let [key, value] of map.entries()) {
    result.push({ category: key, totalSpent: value });
  }
  return result;
}

// Test Cases
console.log(calculateTotalSpentByCategory([
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656076800000, price: 20, category: 'Food', itemName: 'Pizza' },
  { id: 3, timestamp: 1656076800000, price: 30, category: 'Food', itemName: 'Pizza' },
  { id: 4, timestamp: 1656076800000, price: 40, category: 'Food', itemName: 'Pizza' },
  { id: 5, timestamp: 1656076800000, price: 50, category: 'Food', itemName: 'Pizza' },
  { id: 6, timestamp: 1656076800000, price: 6000, category: 'Vehicle', itemName: 'bike' },
]));

module.exports = calculateTotalSpentByCategory;
