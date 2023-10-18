
/**
 * This function replace all the occurences of the given array with the subtraction element
 * @param {number[]} inputArray - An array of iteger to be replace
 * @param {number} elementToReplace - The number is element to replace
 * @param {number} substructionToElement - The number is substruction to element
 * @returns {number[]} - An replaced array
 */

function arrayReplace(inputArray, elementToReplace, substructionToElement) {
  const length = inputArray.length;
  for (let i = 0; i < length; i++) {
    if (inputArray[i] == elementToReplace) {
      inputArray[i] = substructionToElement;
    }
  }

  return inputArray;
}

const arr = [1, 2, 3, 4, 1];
const elmToReplace = 1;
const subToElm = 7;

console.log(arrayReplace(arr, elmToReplace, subToElm));
