// min/max number in an array
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
const max = Math.max.apply(null, numbers);

console.log(max); //7

