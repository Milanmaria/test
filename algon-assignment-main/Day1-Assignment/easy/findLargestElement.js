function findLargestElement(numbers) {
  if (numbers.length === 0) {
    return undefined; // or you can throw an error if needed
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

module.exports = findLargestElement;
const findLargestElement = require('./findLargestElement');

const numbers = [3, 7, 2, 9, 1];
const result = findLargestElement(numbers);
console.log("Largest Element:", result); // Expected Output: 9
