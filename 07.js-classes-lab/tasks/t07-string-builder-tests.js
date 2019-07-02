/*
class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for(let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

const expect = require('chai').expect;
 */

describe('"StringBuilder" class tests', function() {
    const privateFieldName = '_stringArray';

    describe('constructor tests', function() {
        it('when instantiated without parameters, empty array initialized', function() {
            const sb = new StringBuilder();
            const actual = sb[privateFieldName];
            const expected = [];

            expect(JSON.stringify(actual)).to.be.equal(JSON.stringify(expected));
        });

        it('when instantiated with, value is saved correctly', function() {
            const sb = new StringBuilder('01234');
            const actual = sb[privateFieldName];
            const expected = [...'01234'];

            expect(JSON.stringify(actual)).to.be.equal(JSON.stringify(expected));
        });
    });

    let sb;
    const errorMessage = 'Argument must be string';
    beforeEach(function () {
        sb = new StringBuilder();
    });

    describe('"append" method tests', function() {
        it('when passing something different than a string, return TypeError with correct message', function() {
            expect(function () {
                sb.append(100);
            }).to.throw(TypeError, errorMessage);
        });

        it('when passing a string twice, second string should be AFTER first one', function() {
            sb.append('01');
            sb.append('23');
            const actual = sb[privateFieldName];
            const expected = [...'0123'];

            expect(JSON.stringify(actual)).to.be.equal(JSON.stringify(expected));
        });
    });

    describe('"prepend" method tests', function() {
        it('when passing something different than a string, return TypeError with correct message', function() {
            expect(function () {
                sb.prepend(100);
            }).to.throw(TypeError, errorMessage);
        });

        it('when passing a string twice, second string should be BEFORE first one', function() {
            sb.prepend('01');
            sb.prepend('23');
            const actual = sb[privateFieldName];
            const expected = [...'2301'];

            expect(JSON.stringify(actual)).to.be.equal(JSON.stringify(expected));
        });
    });

    describe('"insertAt" method tests', function() {
        it('when passing something different than a string, return TypeError with correct message', function() {
            expect(function () {
                sb.insertAt(100, 5);
            }).to.throw(TypeError, errorMessage);
        });

        it('when passing "01" at index 0 and "23" at index 1, result should be "[0, 2, 3, 1]"', function() {
            sb.insertAt('01', 0);
            sb.insertAt('23', 1);
            const actual = sb[privateFieldName];
            const expected = [...'0231'];

            expect(JSON.stringify(actual)).to.be.equal(JSON.stringify(expected));
        });
    });

    describe('"remove" method tests', function() {
        it('when removing from index 1 to 3 from ["0", "1", "2", "3"], result should be ["0", "3"]', function() {
            sb[privateFieldName] = [...'0123'];
            sb.remove(1, 2);
            const actual = sb[privateFieldName];
            const expected = [...'03'];

            expect(JSON.stringify(actual)).to.be.equal(JSON.stringify(expected));
        });
    });

    describe('"toString" method tests', function() {
        it('when private field is ["0", "1", "2"], return "012"', function () {
            sb[privateFieldName] = [...'012'];
            const actual = sb.toString();
            const expected = '012';

            expect(actual).to.be.equal(expected);
        });
    })
});

