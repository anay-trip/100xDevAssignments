/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    // if the array is empty return undefined  
    // if (numbers.length === 0) {
    //     return undefined;
    // }
    // let largest = numbers[0];
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] > largest) {
    //         largest = numbers[i];
    //     }
    // }
    // return largest;

    if (numbers.length === 0) {
        return undefined;
    }
    return numbers.reduce((a, b) => (a > b ? a : b));
}

module.exports = findLargestElement;