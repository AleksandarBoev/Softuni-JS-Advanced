function aggregates(arr) {
    console.log(`Sum = ${arr.reduce((accumulator, current) => accumulator + current)}`);
    console.log(`Min = ${arr.reduce((accumulator, current) => Math.min(accumulator, current))}`);
    console.log(`Max = ${Math.max.apply(null, arr)}`);

    const multiplication = (num1, num2) => num1 * num2;
    console.log(`Product = ${arr.reduce(multiplication)}`);
    console.log(`Join = ${arr.reduce((accumulator, current) => accumulator + current, '')}`);
}

// aggregates([2, 3, 10, 5]);
