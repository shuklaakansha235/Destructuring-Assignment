function wordCountGenerator(text) {
    /**
     * A function that takes a large string of text as input and counts the occurrences of each word in the text.
     *
     * @param {string} text - A large string of text.
     * @returns {Map} - A Map containing each word as the key and its count as the value.
     */
    const wordCountMap = new Map();
    // Split the text into words using spaces as the delimiter
    const words = text.split(" ");
    for (const word of words) {
        // If word is not already in the wordCountMap, add it with count 1
        if (!wordCountMap.has(word)) {
            wordCountMap.set(word, 1);
        }
        // If word is already in the wordCountMap, increment its count by 1
        else {
            wordCountMap.set(word, wordCountMap.get(word) + 1);
        }
    }
    return wordCountMap;
}

// Example usage:
const text = "This is a sample text. This text is used for word count generation.";
const wordCountMap = wordCountGenerator(text);
console.log(wordCountMap);
