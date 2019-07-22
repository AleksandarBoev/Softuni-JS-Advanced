const PizzUni = require('./pizz-uni');
const expect = require('chai').expect;

describe('"PizzUni" class tests', function () {
    describe('constructor tests', function () {
        it('when initializing object, default values are correct', function () {
            const newObject = new PizzUni();

            const expectedUsers = [];
            const expectedAvailableProducts = {
                pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']
            };
            const expectedOrders = [];

            expect(JSON.stringify(expectedUsers)).to.be.equal(JSON.stringify(newObject.registeredUsers));
            expect(JSON.stringify(expectedAvailableProducts)).to.be.equal(JSON.stringify(newObject.availableProducts));
            expect(JSON.stringify(expectedOrders)).to.be.equal(JSON.stringify(newObject.orders));
        });
    });

    let pizzUniObj;
    beforeEach(function () {
        pizzUniObj = new PizzUni();
    });
    const validPizza = 'Italian Style';

    describe('"registerUser" method tests', function () {
        it('when registering new user, returned object is correct', function () {
            const email = 'blabla';
            const expectedUser = {
                email,
                orderHistory: [],
            };

            const actualUser = pizzUniObj.registerUser(email);

            expect(JSON.stringify(actualUser)).to.be.equal(JSON.stringify(expectedUser));
        });

        it('when registering same user twice, throw exception', function () {
            expect(function () {
                pizzUniObj.registerUser('blabla');
                pizzUniObj.registerUser('blabla');
            }).to.throw(Error, `This email address (blabla) is already being used!`);
        });

        it('when registering user, number of registered users increases', function () {
            const expectedNumberOfUsersBeforeRegister = 0;
            const actualNumberOfUsersBeforeRegister = pizzUniObj.registeredUsers.length;

            const expectedNumberOfUsersAfterRegister = 1;
            pizzUniObj.registerUser('a');
            const actualNumberOfUsersAfterRegister = pizzUniObj.registeredUsers.length;

            expect(actualNumberOfUsersBeforeRegister)
                .to.be.equal(expectedNumberOfUsersBeforeRegister, 'Before registration');

            expect(actualNumberOfUsersAfterRegister)
                .to.be.equal(expectedNumberOfUsersAfterRegister, 'After register');
        });
    });

    describe('"makeAnOrder" method tests', function () {
        it('when user search by email does not exist, throw error', function () {
            expect(function () {
                pizzUniObj.makeAnOrder('blabla');
            }).to.throw(Error, `You must be registered to make orders!`);
        });

        it('when ordering a non existing pizza, throw error', function () {
            pizzUniObj.registerUser('a');
            expect(function () {
                pizzUniObj.makeAnOrder('a', 'pineapple pizza is a disgustang');
            }).to.throw(Error, 'You must order at least 1 Pizza to finish the order.');
        });

        it('when ordering a non existing drink, do not add it and searching for it returns undefined', function () {
            pizzUniObj.registerUser('a');
            pizzUniObj.makeAnOrder('a', validPizza, 'Nectar of the gods');

            expect(undefined).to.be.equal(pizzUniObj.orders[0].orderedDrink);
        });

        it('when making a valid order, return 0', function () {
            pizzUniObj.registerUser('a');
            const expected = 0;
            const actual = pizzUniObj.makeAnOrder('a', validPizza);

            expect(actual).to.be.equal(expected);
        });

        it('when making two valid orders, return 0 and then 1', function () {
            pizzUniObj.registerUser('a');
            const expectedFirstOrderId = 0;
            const expectedSecondOrderId = 1;

            const actualFirstOrderId = pizzUniObj.makeAnOrder('a', validPizza);
            const actualSecondOrderId = pizzUniObj.makeAnOrder('a', validPizza);

            expect(actualFirstOrderId).to.be.equal(expectedFirstOrderId, 'First order');
            expect(actualSecondOrderId).to.be.equal(expectedSecondOrderId, 'Second order');
        });

        it('when valid order is made, object is pushed into "orders"', function () {
            const email = 'a';
            const expected = {
                orderedPizza: validPizza,
                email,
                status: 'pending',
            };

            pizzUniObj.registerUser(email);
            pizzUniObj.makeAnOrder(email, validPizza);

            const actual = pizzUniObj.orders[0];
            expect(JSON.stringify(actual)).to.be.equal(JSON.stringify(expected));
        })
    });

    describe('"detailsAboutMyOrder" method tests', function () {
        it('when a new order is made, return "pending"', function () {
            const expected = 'Status of your order: pending';
            pizzUniObj.registerUser('a');
            pizzUniObj.makeAnOrder('a', validPizza);
            const actual = pizzUniObj.detailsAboutMyOrder(0);

            expect(actual).to.be.equal(expected);
        });
    });

    describe('"doesTheUserExist" method tests', function () {
        it('when a user is registered and method is called, same user is returned', function () {
            const email = 'a';

            const expected = {
                email,
                orderHistory: []
            };

            pizzUniObj.registerUser(email);

            const actual = pizzUniObj.doesTheUserExist(email);

            expect(JSON.stringify(expected)).to.equal(JSON.stringify(actual));
        })
    });

    describe('"completeOrder" method tests', function () {
        it('completing an existing order, sets it to "completed"', function () {
            const expected = `Status of your order: completed`;

            pizzUniObj.registerUser('a');
            pizzUniObj.makeAnOrder('a', validPizza);
            pizzUniObj.completeOrder();
            const actual = pizzUniObj.detailsAboutMyOrder(0);

            expect(expected).to.be.equal(actual);
        });

        it('completing an existing order, return the order object', function () {
            const orderedPizza = {validPizza};
            const email = 'a';
            const expected = {
                "orderedPizza": "Italian Style",
                email,
                status: 'completed'
            };

            pizzUniObj.registerUser('a');
            pizzUniObj.makeAnOrder('a', validPizza);

            const actual = pizzUniObj.completeOrder();

            expect(JSON.stringify(expected)).to.be.equal(JSON.stringify(actual));
        });
    });
});