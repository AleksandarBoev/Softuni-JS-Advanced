class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

const expect = require('chai').expect;


describe('"PaymentPackage" tests', function () {
    /*
    Would be more correct to test if certain methods are used when calling functions, using
    something like "spyOn". And having separate tests for the validation functions.
    Also error messages would be nicer to be in static variables in the class.
     */
    const validName = 'Beer';
    const validValue = 1500;

    describe('Constructor tests', function () {
        const nameErrorMessage = 'Name must be a non-empty string';
        const valueErrorMessage = 'Value must be a non-negative number';

        it('when passing valid parameters, no errors thrown', function () {
            expect(function () {
                new PaymentPackage(validName, validValue);
            }).to.not.throw(Error);
        });

        it('when passing empty string for "name", throw error with correct message', function () {
            expect(function () {
                new PaymentPackage('', validValue);
            }).to.throw(Error, nameErrorMessage)
        });

        it('when passing 5 for "name", throw error with correct message', function () {
            expect(function () {
                new PaymentPackage(5, validValue);
            }).to.throw(Error, nameErrorMessage)
        });

        it('when passing a string for "value", throw error with correct message', function () {
            expect(function () {
                new PaymentPackage(validName, 'error pls');
            }).to.throw(Error, valueErrorMessage)
        });

        it('when passing -5 for "value", throw error with correct message', function () {
            expect(function () {
                new PaymentPackage(validName, -5);
            }).to.throw(Error, valueErrorMessage)
        });

        it('when passing 0 parameters, throw name error', function () {
            expect(function () {
                new PaymentPackage();
            }).to.throw(Error, nameErrorMessage);
        });

        it('when passing only name, throw value error', function () {
            expect(function () {
                new PaymentPackage(validName);
            }).to.throw(Error, valueErrorMessage);
        })
    });

    let paymentPackage;
    beforeEach(function () {
        paymentPackage = new PaymentPackage(validName, validValue);
    });

    describe('VAT validation tests', function () {
        const vatErrorMessage = 'VAT must be a non-negative number';

        it('when passing valid value, don\'t throw error', function () {
            expect(function () {
                paymentPackage.VAT = 10;
            }).to.not.throw(Error);
        });

        it('when passing undefined, throw error with correct message', function () {
            expect(function () {
                paymentPackage.VAT = undefined;
            }).to.throw(Error, vatErrorMessage);
        });

        it('when passing string, throw error with correct message', function () {
            expect(function () {
                paymentPackage.VAT = 'hello';
            }).to.throw(Error, vatErrorMessage);
        });

        it('when passing negative number, throw error with correct message', function () {
            expect(function () {
                paymentPackage.VAT = -10;
            }).to.throw(Error, vatErrorMessage);
        });
    });

    describe('active validation tests', function () {
        const activeErrorMessage = 'Active status must be a boolean';

        it('when passing valid boolean value, don\' throw error', function () {
            expect(function () {
                paymentPackage.active = true;
            }).to.not.throw(Error);
        });

        it('when passing undefined, throw error with correct message', function () {
            expect(function () {
                paymentPackage.active = undefined;
            }).to.throw(Error, activeErrorMessage);
        });

        it('when passing a string, throw error with correct message', function () {
            expect(function () {
                paymentPackage.active = 'hello';
            }).to.throw(Error, activeErrorMessage);
        });
    });


    describe('"toString" method tests', function () {
        const addVat = (amount, vat) => {
            return amount * (1 + vat / 100);
        };

        it(`when name is ${validName}, value is ${validValue}, VAT is 20, active is true`,
            function () {
                const actual = paymentPackage.toString();

                const expected = [
                    `Package: ${validName}` + (true === false ? ' (inactive)' : ''),
                    `- Value (excl. VAT): ${validValue}`,
                    `- Value (VAT 20%): ${addVat(validValue, 20)}`
                ].join('\n');

                expect(actual).to.be.equal(expected);
            });

        it(`when name is ${validName}, value is ${validValue}, VAT is 10, active is false`,
            function () {
                paymentPackage.active = false;
                paymentPackage.VAT = 10;
                const actual = paymentPackage.toString();

                const expected = [
                    `Package: ${validName}` + (false === false ? ' (inactive)' : ''),
                    `- Value (excl. VAT): ${validValue}`,
                    `- Value (VAT 10%): ${addVat(validValue, 10)}`
                ].join('\n');

                expect(actual).to.be.equal(expected);
            });
    });
});