function removeDuplicates(numbers) {
    /**
     * A function that takes an array of numbers as input and removes all the duplicates from the array.
     *
     * @param {number[]} numbers - An array of numbers.
     * @returns {Set} - A Set containing only the unique elements.
     */
    const uniqueSet = new Set(numbers);
    return uniqueSet;
}

// Example usage:
const numbers = [1, 2, 3, 4, 3, 2, 1, 5, 6, 7, 5, 8, 9, 6];
const uniqueSet = removeDuplicates(numbers);
console.log([...uniqueSet]);
