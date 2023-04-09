function extractNameAndStreet(person) {
    /**
     * A function that extracts the name and street properties from a nested object using object destructuring.
     *
     * @param {Object} person - The input object representing a person.
     * @returns {Object} - An object with properties name and street representing the extracted values.
     */
    const { name, address: { street } } = person;
    return { name, street };
}

// Example usage:
const inputPerson = {
    name: 'Mithun',
    age: 21,
    address: {
        street: 'B8, Block B, Industrial Area.',
        city: 'Sector 62, Noida',
        state: 'Uttar Pradesh'
    }
};
const result = extractNameAndStreet(inputPerson);
console.log(result);
