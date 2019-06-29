// function createCalculator() {
//     let value = 0;
//     return {
//         add: function (num) {
//             value += Number(num);
//         },
//         subtract: function (num) {
//             value -= Number(num);
//         },
//         get: function () {
//             return value;
//         }
//     }
// }
//
// const expect = require('chai').expect;

describe('"createCalculator" function tests', function () {
    let calculator;
    const calculationValue = 5;

    beforeEach(function () {
        calculator = createCalculator();
    });

    it('when "add" property is called, not undefined', function () {
        expect(calculator.add).to.be.not.undefined;
    });

    it('when "subtract" property is called, not undefined', function () {
        expect(calculator.subtract).to.be.not.undefined;
    });

    it('when "get" property is called, not undefined', function () {
        expect(calculator.get).to.be.not.undefined;
    });

    it('when "add" is called, a function is returned', function () {
        const actualType = typeof calculator.add;
        const expectedType = 'function';

        expect(expectedType).to.be.equal(actualType);
    });

    it('when "subtract" is called, a function is returned', function () {
        const actualType = typeof calculator.subtract;
        const expectedType = 'function';

        expect(expectedType).to.be.equal(actualType);
    });

    it('when "get" is called, a function is returned', function () {
        const actualType = typeof calculator.get;
        const expectedType = 'function';

        expect(expectedType).to.be.equal(actualType);
    });

    it('when trying to access internal sum variable, return "undefined"', function () {
       expect(calculator.value).to.be.undefined;
    });

    it('when passing a number to "add", "get" returns correct result', function () {
       calculator.add(calculationValue);

       expect(calculator.get()).to.be.equal(calculationValue);
    });

    it('when passing a parsable string number to "add", "get" returns correct result', function () {
        calculator.add('' + calculationValue);

        expect(calculator.get()).to.be.equal(calculationValue);
    });

    it('when passing a number to "subtract", "get" returns correct result', function () {
        calculator.subtract(calculationValue);

        expect(calculator.get()).to.be.equal(-1 * calculationValue);
    });

    it('when passing a parsable string number to "subtract", "get" returns correct result', function () {
        calculator.subtract('' + calculationValue);

        expect(calculator.get()).to.be.equal(-1 * calculationValue);
    });

    it('when calling multiple times "add" and "subtract", "get" returns correct result', function () {
        calculator.add(3);
        calculator.add(8);

        calculator.subtract(5);
        calculator.subtract(1);

        expect(calculator.get()).to.be.equal(5);
    });
});