// function isOddOrEven(string) {
//     if (typeof(string) !== 'string') {
//         return undefined;
//     }
//     if (string.length % 2 === 0) {
//         return "even";
//     }
//
//     return "odd";
// }
//
// const expect = require('chai').expect;

describe('"isOddOrEven" function tests', function () {
    it('when number parameter passed, return undefined', function () {
        const actual = isOddOrEven(32);

        expect(actual).to.be.undefined;
    });

    it ('when object parameter passed, return undefined', function () {
        const actual = isOddOrEven({name: 'Aleksandar', age: 23});

        expect(actual).to.be.undefined;
    });

    it('when even length string parameter passed, return "even"', function () {
        const actual = isOddOrEven('1234');
        const expected = 'even';

        expect(actual).to.be.equal(expected);
    });

    it('when 0 length string parameter passed, return "even"', function () {
        const actual = isOddOrEven('');
        const expected = 'even';

        expect(actual).to.be.equal(expected);
    });

    it('when odd length string parameter passed, return "odd"', function () {
        const actual = isOddOrEven('123');
        const expected = 'odd';

        expect(actual).to.be.equal(expected);
    });
});