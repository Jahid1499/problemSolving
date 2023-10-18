/**
 * 1. Write a function that returns the sum of two number
 *
 * Adds two numbers.
 *
 * @param {number} firstNumber - The first number to be added.
 * @param {number} secondNumber - The second number to be added.
 *
 * @returns {number} - The sum of the two numbers
 */
const addTwoNumber = (firstNumber, secondNumber) => firstNumber + secondNumber;

console.log(addTwoNumber(2, 5));


/**
 * 2. Write a function that returns the sum of all numbers regardless of # parameters
 * A utility function to add all parameters
 *
 * @param {number[]} elements - The perameter for sum
 * @returns {number} - The sum of all perameter
 */

const sum = (...elements) => {
  let sum = 0;

  // Imparative way
  elements.forEach((item) => (sum += item));
  return sum;

  //Declearative way
  // for (let i = 0; i < elements.length; i++) {
  //   sum += elements[i];
  // }
  // return sum;
};

console.log(sum(1, 2, 3, 6));
