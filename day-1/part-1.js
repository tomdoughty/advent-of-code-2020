/* eslint-disable no-restricted-syntax */
/**
 * Finds 2 numbers in an array which add to 2020 and multiplies them
 * https://adventofcode.com/2020/day/1
 *
 * @param {number[]} array - Array of numbers to process
 * @return {number} - Answer
 */
module.exports = (array = []) => {
  const numbers = array.map(Number);
  for (const num1 of numbers) {
    for (const num2 of numbers) {
      if (num1 + num2 === 2020) return num1 * num2;
    }
  }
  return null;
};
