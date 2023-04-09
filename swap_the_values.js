function swapValues(x, y) {
    /**
     * A function that swaps the values of two variables without using a temporary variable.
     *
     * @param {*} x - First variable.
     * @param {*} y - Second variable.
     * @returns {Array} - An array with the swapped values.
     */
    // Use destructuring assignment to swap the values
    [x, y] = [y, x];
    return [x, y];
}

// Example usage:
let x = 5;
let y = 10;
console.log("Before swapping: x =", x, "y =", y);
const swappedValues = swapValues(x, y);
x = swappedValues[0];
y = swappedValues[1];
console.log("After swapping: x =", x, "y =", y);
