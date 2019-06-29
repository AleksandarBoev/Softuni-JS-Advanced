// function sum(arr) {
//     let sum = 0;
//     for (num of arr)
//         sum += Number(num);
//     return sum;
// }
//
// const expect = require('chai').expect;

describe('"sum" function unit tests', () => {
    it('unparsable strings in input array, should return NaN', () => {
        const badArrayParam = [1, 2, 'word'];

        const actual = sum(badArrayParam);
        const expected = NaN;

        expect(actual).to.be.NaN
    });

    it('valid array of parsable number strings, should return their sum', () => {
        const validArray = ['1', '2', '3'];

        const actual = sum(validArray);
        const expected = 6;

        expect(actual).to.be.equal(expected);
    });

    it('valid array of numbers, should return their sum', () => {
        const validArray = [1, 2, 3];

        const actual = sum(validArray);
        const expected = 6;

        expect(actual).to.be.equal(expected);
    });
});
