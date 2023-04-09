function findMinMax(arr) {
    /**
     * A function that finds the maximum and minimum values in an array using the spread operator and Math methods.
     *
     * @param {Array} arr - The input array.
     * @returns {Object} - An object with properties max and min representing the maximum and minimum values.
     */
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}

// Example usage:
const inputArray = [5, 2, 7, 1, 9];
const result = findMinMax(inputArray);
console.log(result);
