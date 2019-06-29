// function isSymmetric(arr) {
//     if (!Array.isArray(arr))
//         return false; // Non-arrays are non-symmetric
//     let reversed = arr.slice(0).reverse(); // Clone and reverse
//     let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
//     return equal;
// }
//
// const expect = require('chai').expect;

describe('"isSymmetric" function tests', function () {
    it('when number parameter, return false', function () {
        const actual = isSymmetric(2);
        const expected = false;

        expect(actual).to.be.equal(expected);
    });

    it('when symmetric even length array, return "true"', function () {
        const actual = isSymmetric([1, 2, 2, 1]);
        const expected = true;

        expect(actual).to.be.equal(expected);
    });

    it('when symmetric odd length array, return "true"', function () {
        const actual = isSymmetric([1, 2, 1]);
        const expected = true;

        expect(actual).to.be.equal(expected);
    });

    it('when not symmetric array, return "false"', function () {
        const actual = isSymmetric([1, 2, 3, 4, 5]);
        const expected = false;

        expect(actual).to.be.equal(expected);
    });

    it('when symmetric array of objects, return "true"',function () {
        const obj1 = {
            name: 'Gosho',
            age: 20,
        };

        const obj2 = {
            name: 'Pesho',
            age: 30,
        };

        const obj3 = {
            name: 'Gosho',
            age: 20,
        };

        const actual = isSymmetric([obj1, obj2, obj3]);
        const expected = true;

        expect(actual).to.be.equal(expected);
    });
});