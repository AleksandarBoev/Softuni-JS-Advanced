// let mathEnforcer = {
//     addFive: function (num) {
//         if (typeof (num) !== 'number') {
//             return undefined;
//         }
//         return num + 5;
//     },
//     subtractTen: function (num) {
//         if (typeof (num) !== 'number') {
//             return undefined;
//         }
//         return num - 10;
//     },
//     sum: function (num1, num2) {
//         if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
//             return undefined;
//         }
//         return num1 + num2;
//     },
//     log: () => {
//         return 'hello';
//     },
//     field: 'greeting',
// };
//
// const expect = require('chai').expect;

describe('"mathEnforcer" object tests', function () {

    const objectMethodTest = (object, propertyName, expectedValue, ...params) => {
        let actual;

        if (typeof object[propertyName] === 'function') {
            actual = object[propertyName](...params);
        } else {
            actual = object[propertyName];
        }

        expect(actual).to.be.equal(expectedValue);
    };

    describe('"addFive" function tests', function () {
        const addFiveTest = (expectedValue, ...params) =>
            objectMethodTest(mathEnforcer, 'addFive', expectedValue, ...params);

        it('when string parameter passed, return "undefined"', function () {
            addFiveTest(undefined, ['word']);
        });

        it('when number 3 is passed, return 8', function () {
            addFiveTest(8, 3);
        });

        it('when number -3 is passed, return 2', function () {
            addFiveTest(2, -3);
        });

        it('when float number 3.5 is passed, return 8.5', function () {
            addFiveTest(8.5, 3.5);
        });
    });

    describe('"subtractTen" function tests', function () {
        const subtractTenTest = (expectedValue, ...params) =>
            objectMethodTest(mathEnforcer, 'subtractTen', expectedValue, ...params);

        it('when string parameter passed, return "undefined"', function () {
            subtractTenTest(undefined, 'word');
        });

        it('when number 13 is passed, return 3', function () {
            subtractTenTest(3, 13);
        });

        it('when number -3 is passed, return -13', function () {
            subtractTenTest(-13, -3);
        });

        it('when float number 13.5 is passed, return 3.5', function () {
            subtractTenTest(3.5, 13.5);
        });
    });

    describe('"sum" function tests', function () {
        const sumTest = (expectedValue, ...params) =>
            objectMethodTest(mathEnforcer, 'sum', expectedValue, ...params);

        it('when first param is not a number, return undefined', function () {
            sumTest(undefined, 'word', 5);
        });

        it('when second param is not a number, return undefined', function () {
            sumTest(undefined, 5, 'word');
        });

        it('when both params are not numbers, return undefined', function () {
            sumTest(undefined, {greeting: 'hello'}, 'goodbye');
        });

        it('when params are 3 and 5, return 8', function () {
            sumTest(8, 3, 5);
        });

        it('when params are -3 and -5, return -8', function () {
            sumTest(-8, -3, -5);
        });

        it('when params are 3.5 and 4.2, return 7.7', function () {
            sumTest(7.7, 3.5, 4.2);
        })
    });

    // describe('just testing stuff', function() { //works
    //     it('when blabla, blabla', function() {
    //         objectMethodTest(mathEnforcer, 'log', 'hello');
    //     });
    //
    //     it('oh well ', function () {
    //         objectMethodTest(mathEnforcer, 'field', 'greeting');
    //     });
    // });
});