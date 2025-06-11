function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  for (const txn of transactions) {
    const category = txn.category;
    const price = txn.price;

    if (categoryMap[category]) {
      categoryMap[category] += price;
    } else {
      categoryMap[category] = price;
    }
  }

  const result = [];

  for (const category in categoryMap) {
    result.push({
      category: category,
      totalSpent: categoryMap[category]
    });
  }

  return result;
}

const transactions = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656076800000, price: 20, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656076800000, price: 15, category: 'Clothing', itemName: 'T-shirt' }
];

console.log(calculateTotalSpentByCategory(transactions));
