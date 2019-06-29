//•	If the first element is not an array, return NaN
// •	If the start index is less than zero, consider its value to be a zero
// •	If the end index is outside the bounds of the array, assume it points to the last index of the arra
function sum(arrayOfNumbers, fromIndex, toIndex) {
    if (!Array.isArray(arrayOfNumbers)) {
        return NaN;
    }

    if (fromIndex < 0) {
        fromIndex = 0;
    }

    if (toIndex > arrayOfNumbers.length - 1) {
        toIndex = arrayOfNumbers.length - 1;
    }

    let result = 0;
    for (let i = fromIndex; i <= toIndex; i += 1) {
        result += +arrayOfNumbers[i];
    }

    return result;
}

// console.log(sum([1, 2, 'helllo'], 0, 3));