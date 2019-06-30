// function lookupChar(string, index) {
//     if (typeof(string) !== 'string' || !Number.isInteger(index)) {
//         return undefined;
//     }
//     if (string.length <= index || index < 0) {
//         return 'Incorrect index';
//     }
//
//     return string.charAt(index);
// }
//
// const expect = require('chai').expect;

describe('"lookupChar" function tests', function() {
   describe('invalid parameters tests', function () {
       const invalidIndexMessage = 'Incorrect index';

       it('when number is passed instead of string for first parameter, return "undefined"', function () {
           const actual = lookupChar(5, 5);

           expect(actual).to.be.undefined;
       });

       it('when string is passed instead of number for second parameter, return "undefined"', function() {
           const actual = lookupChar('hello', 'goodbye');

           expect(actual).to.be.undefined;
       });

       it(`when negative index is passed as second parameter, return "${invalidIndexMessage}"`, function () {
           const actual = lookupChar('hello', -1);

           expect(actual).to.be.equal(invalidIndexMessage);
       });

       it(`when second parameter index is bigger or equal to string length, return "${invalidIndexMessage}"`, function() {
           const string = 'hello';
           const actual = lookupChar(string, string.length);

           expect(actual).to.be.equal(invalidIndexMessage);
       });

       it('when second parameter is a floating point number, return "undefined"', function () {
           const actual = lookupChar('hello', 2.7);

           expect(actual).to.be.undefined;
       })
   });

   describe('valid parameters tests', function () {
        it('when index 0, return correct result', function () {
            const actual = lookupChar('012345', 0);
            const expected = '0';

            expect(actual).to.be.equal(expected);
        });

       it('when last index, return correct result', function () {
           const string = '012345';
           const actual = lookupChar('012345', string.length - 1);
           const expected = '5';

           expect(actual).to.be.equal(expected);
       });
   });
});