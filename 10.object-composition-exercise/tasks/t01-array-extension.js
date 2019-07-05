const result =
    (function arrayExtension() {
            const extendedArray = [];
            extendedArray.last = () => extendedArray[extendedArray.length - 1];

            extendedArray.skip = n => extendedArray.slice(extendedArray.length - 1 - n, extendedArray.length);

            extendedArray.take = n => extendedArray.slice(0, n);

            extendedArray.sum = () => extendedArray.reduce((accumulator, currentElement) => accumulator += currentElement, 0);
            extendedArray.average = function () {
                return extendedArray.sum() / extendedArray.length;
            };

            return extendedArray;
        }
    )();

// result.push(1, 2, 3, 4, 5);
// console.log(result.average());