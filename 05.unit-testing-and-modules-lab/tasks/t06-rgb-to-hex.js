// function rgbToHexColor(red, green, blue) {
//     if (!Number.isInteger(red) || (red < 0) || (red > 255))
//         return undefined; // Red value is invalid
//     if (!Number.isInteger(green) || (green < 0) || (green > 255))
//         return undefined; // Green value is invalid
//     if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
//         return undefined; // Blue value is invalid
//     return "#" +
//         ("0" + red.toString(16).toUpperCase()).slice(-2) +
//         ("0" + green.toString(16).toUpperCase()).slice(-2) +
//         ("0" + blue.toString(16).toUpperCase()).slice(-2);
// }
//
// const expect = require('chai').expect;

describe('"rgbToHexColor" function tests', function () {

    describe('passing invalid params, return "undefined"', function () {
        const validColorNum = 10;
        const invalidStringParam = 'word';
        const invalidFloatParam = 10.5;
        const lowerBoundaryValue = 0;
        const upperBoundaryValue = 255;

        // function testFirstParam(param) { //judge doesn't like this solution
        //     rgbToHexColor(param, validColorNum, validColorNum)
        // }
        //
        // function testSecondParam(param) {
        //     rgbToHexColor(validColorNum, param, validColorNum)
        // }
        //
        // function testThirdParam(param) {
        //     rgbToHexColor(validColorNum, validColorNum, param)
        // }

        it('when string parameter passed', function () {
            const actual1 = rgbToHexColor(invalidStringParam, validColorNum, validColorNum);
            const actual2 = rgbToHexColor(validColorNum, invalidStringParam, validColorNum);
            const actual3 = rgbToHexColor(validColorNum, validColorNum, invalidStringParam);

            expect(actual1).to.be.undefined;
            expect(actual2).to.be.undefined;
            expect(actual3).to.be.undefined;
        });

        it('when float parameter passed', function () {
            const actual1 = rgbToHexColor(invalidFloatParam, validColorNum, validColorNum);
            const actual2 = rgbToHexColor(validColorNum, invalidFloatParam, validColorNum);
            const actual3 = rgbToHexColor(validColorNum, validColorNum, invalidFloatParam);

            expect(actual1).to.be.undefined;
            expect(actual2).to.be.undefined;
            expect(actual3).to.be.undefined;
        });

        it('when lower than ' + lowerBoundaryValue + ' param value passed', function () {
            const actual1 = rgbToHexColor(lowerBoundaryValue - 1, validColorNum, validColorNum);
            const actual2 = rgbToHexColor(validColorNum, lowerBoundaryValue - 1, validColorNum);
            const actual3 = rgbToHexColor(validColorNum, validColorNum, lowerBoundaryValue - 1);

            expect(actual1).to.be.undefined;
            expect(actual2).to.be.undefined;
            expect(actual3).to.be.undefined;
        });

        it('when bigger than ' + upperBoundaryValue + ' param value passed', function () {
            const actual1 = rgbToHexColor(upperBoundaryValue + 1, validColorNum, validColorNum);
            const actual2 = rgbToHexColor(validColorNum, upperBoundaryValue + 1, validColorNum);
            const actual3 = rgbToHexColor(validColorNum, validColorNum, upperBoundaryValue + 1);

            expect(actual1).to.be.undefined;
            expect(actual2).to.be.undefined;
            expect(actual3).to.be.undefined;
        });
    });

    describe('passing valid params', function () {
        it('when 255, 158, 170 passed, return "#FF9EAA"', function () {
            const actual = rgbToHexColor(255, 158, 170);
            const expected = '#FF9EAA';

            expect(actual).to.be.equal(expected);
        });
    });

});