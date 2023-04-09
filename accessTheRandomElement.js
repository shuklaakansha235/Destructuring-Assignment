function extractElements(arr) {
    /**
     * A function that extracts the first, second, and last elements from an array using destructuring assignment.
     *
     * @param {Array} arr - The input array.
     * @returns {Array} - An array with the first, second, and last elements.
     */
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last];
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const extractedElements = extractElements(inputArray);
console.log(extractedElements);
