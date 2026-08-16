function getArrayWithLength(string) {
    return Array.from(string);
}

console.log(getArrayWithLength("Hello"));

console.log(getArrayWithLength("Hello JS Arrays"));



function createDuplicateArray(element, n) {
    return Array(n).fill(element);
}
console.log(createDuplicateArray("x", 5)); // Output: ["x", "x", "x", "x", "x"]