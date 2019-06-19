function sortArray(arr, typeOfSorting) {
    const sortingFunctions = {
        'asc': (num1, num2) => {
            return num1 - num2;
        },
        'desc': (num1, num2) => {
            return num2 - num1;
        }
    };

    arr.sort(sortingFunctions[typeOfSorting]);
    return arr;
}

// sortArray([14, 7, 17, 6, 8], 'desc');