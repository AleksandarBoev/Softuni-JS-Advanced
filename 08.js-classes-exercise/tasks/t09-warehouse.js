//
// class Warehouse {
//     get capacity() {
//         return this._capacity;
//     }
//
//     set capacity(givenSpace) {
//         if (typeof givenSpace === 'number' && givenSpace > 0) {
//             return this._capacity = givenSpace; //return new value
//         } else {
//             throw `Invalid given warehouse space`;
//         }
//     }
//
//     constructor(capacity) {
//         this.capacity = capacity;
//         this.availableProducts = {'Food': {}, 'Drink': {}};
//     }
//
//     /**
//      * Checks if there is enough room for the quantity and if so - adds the product to the "availableProducts" object.
//      * @param type {String} "Drink" or "Food"
//      * @param product {String} Product name
//      * @param quantity {Number}
//      * @return object product->quantity if there is enough capacity or throw a message if there isn't enough capacity
//      */
//     addProduct(type, product, quantity) {
//         let capacityAfterAddedQuantity = ((this.capacity - this.occupiedCapacity()) - quantity);
//         let output;
//
//         if (capacityAfterAddedQuantity >= 0) {
//             if (this.availableProducts[type].hasOwnProperty(product) === false) {
//                 this.availableProducts[type][product] = 0;
//             }
//
//             this.availableProducts[type][product] += quantity;
//             output = this.availableProducts[type];
//         } else {
//             throw `There is not enough space or the warehouse is already full`;
//         }
//
//         return output;
//     }
//
//     /**
//      * Sorts all products of a given type in descending order by the quantity.
//      * @param type {String} "Food" or "Drink"
//      * @return sorted products
//      */
//     orderProducts(type) {
//         let output;
//         let sortedKeys = Object.keys(this.availableProducts[type])
//             .sort((a, b) => this.availableProducts[type][b] - this.availableProducts[type][a]);
//
//         let newObj = {};
//         for (let product of sortedKeys) {
//             if (newObj.hasOwnProperty(product) === false) {
//                 newObj[product] = 0;
//             }
//
//             newObj[product] += this.availableProducts[type][product];
//         }
//
//         this.availableProducts[type] = newObj;
//         output = this.availableProducts[type];
//
//         return output;
//     }
//
//     /**
//      * Goes though all available products and accumulates all quantity
//      * @return {number} all quantity
//      */
//     occupiedCapacity() {
//         let output = 0;
//         let productsCount = Object.keys(this.availableProducts['Food']).length +
//             Object.keys(this.availableProducts['Drink']).length;
//
//         if (productsCount > 0) {
//             let quantityInStock = 0;
//
//             for (let type of Object.keys(this.availableProducts)) {
//                 for (let product of Object.keys(this.availableProducts[type])) {
//                     quantityInStock += this.availableProducts[type][product];
//                 }
//             }
//             output = quantityInStock;
//         }
//
//         return output;
//     }
//
//     revision() {
//         let output = "";
//
//         if (this.occupiedCapacity() > 0) {
//             for (let type of Object.keys(this.availableProducts)) {
//                 output += `Product type - [${type}]\n`;
//                 for (let product of Object.keys(this.availableProducts[type])) {
//                     output += `- ${product} ${this.availableProducts[type][product]}\n`;
//                 }
//             }
//         } else {
//             output = 'The warehouse is empty';
//         }
//
//         return output.trim();
//     }
//
//     scrapeAProduct(product, quantity) {
//         let type = Object.keys(this.availableProducts).find(t => Object.keys(this.availableProducts[t]).includes(product));
//         let output;
//
//         if (type !== undefined) {
//             if (quantity <= this.availableProducts[type][product]) {
//                 this.availableProducts[type][product] -= quantity;
//             } else {
//                 this.availableProducts[type][product] = 0;
//             }
//
//             output = this.availableProducts[type];
//         } else {
//             throw `${product} do not exists`;
//         }
//
//         return output;
//     }
// }
//
// const expect = require('chai').expect;

describe('Warehouse tests', function () {
    describe('constructor tests', function () {
        it('when passing a positive number, don\'t throw error', function () {
            expect(function () {
                new Warehouse(1);
            }).to.not.throw('Invalid given warehouse space');
        });

        it('when passing a negative number, throw error with correct message', function () {
            expect(function () {
                new Warehouse(-1);
            }).to.throw('Invalid given warehouse space');
        });

        it('when passing 0, throw error with correct message', function () {
            expect(function () {
                new Warehouse(0);
            }).to.throw('Invalid given warehouse space');
        });
    });

    const initialCapacity = 10;
    const drink = 'Drink';
    const food = 'Food';
    const drinkProduct = 'Tea';
    const foodProduct = 'Sandwich';

    let warehouse;
    beforeEach(function () {
        warehouse = new Warehouse(initialCapacity);
    });

    describe('"addProduct" tests', function () {
        it('when adding product with quantity less than initial capacity, product is added', function () {
            const actualObjectResult =
                warehouse.addProduct(drink, drinkProduct, initialCapacity - 1);
            const expectedObjectResult = {};
            expectedObjectResult[drinkProduct] = initialCapacity - 1;

            expect(JSON.stringify(expectedObjectResult)).to.be.equal(JSON.stringify(actualObjectResult));
        });

        it('when adding product with quantity equal to initial capacity, product is added', function () {
            const actualObjectResult =
                warehouse.addProduct(drink, drinkProduct, initialCapacity);
            const expectedObjectResult = {};
            expectedObjectResult[drinkProduct] = initialCapacity;

            expect(JSON.stringify(expectedObjectResult)).to.be.equal(JSON.stringify(actualObjectResult));
        });

        it('when adding two different products with sum of quantities equal to initial capacity, products are added', function () {
            const actualObjectResult1 =
                warehouse.addProduct(drink, drinkProduct, initialCapacity / 2);

            const actualObjectResult2 =
                warehouse.addProduct(food, foodProduct, initialCapacity / 2);

            const expectedObjectResult1 = {};
            expectedObjectResult1[drinkProduct] = initialCapacity / 2;

            const expectedObjectResult2 = {};
            expectedObjectResult2[foodProduct] = initialCapacity / 2;

            expect(JSON.stringify(expectedObjectResult1)).to.be.equal(JSON.stringify(actualObjectResult1));
            expect(JSON.stringify(expectedObjectResult2)).to.be.equal(JSON.stringify(actualObjectResult2));
        });

        it('when adding two products with equal names with sum of quantities equal to initial capacity, products are added', function () {
            const actualObjectResult1 =
                warehouse.addProduct(drink, drinkProduct, initialCapacity / 2);

            const actualObjectResult2 =
                warehouse.addProduct(food, drinkProduct, initialCapacity / 2);

            const expectedObjectResult1 = {};
            expectedObjectResult1[drinkProduct] = initialCapacity / 2;

            const expectedObjectResult2 = {};
            expectedObjectResult2[drinkProduct] = initialCapacity / 2;

            expect(JSON.stringify(expectedObjectResult1)).to.be.equal(JSON.stringify(actualObjectResult1));
            expect(JSON.stringify(expectedObjectResult2)).to.be.equal(JSON.stringify(actualObjectResult2));
        });

        it('when adding product with quantity more than initial capacity, product is added', function () {
            const expected = 'There is not enough space or the warehouse is already full';

            expect(function () {
                warehouse.addProduct(drink, drinkProduct, initialCapacity + 1);
            }).to.throw(expected);
        });
    });

    describe('"orderProducts" tests', function () {

        it('when having Sandwich: 3, Burger: 2, Pizza: 5, should return Pizza: 5, Sandwich: 3, Burger2', function () {
            const expectedSortedObject = {
                Pizza: 5,
                Sandwich: 3,
                Burger: 2,
            };

            warehouse.availableProducts[food] = {
                Sandwich: 3,
                Burger: 2,
                Pizza: 5,
            };

            const actualObject = warehouse.orderProducts(food);

            expect(JSON.stringify(actualObject)).to.be.equal(JSON.stringify(expectedSortedObject));
            expect(JSON.stringify(warehouse.availableProducts[food])).to.be.equal(JSON.stringify(expectedSortedObject));
        });
    });

    describe('"occupiedCapacity" tests', function () {
        it('when called, returns 0', function () {
            expect(0).to.be.equal(warehouse.occupiedCapacity());
        });

        it('when product is ordered with capacity 4, returns 4', function () {
            const quantity = 4;
            warehouse.addProduct(food, foodProduct, quantity);
            expect(quantity).to.be.equal(warehouse.occupiedCapacity());
        });

        it('when two products are ordered with capacity 4 each, 8', function () {
            const quantity = 4;
            warehouse.addProduct(food, foodProduct, quantity);
            warehouse.addProduct(food, foodProduct, quantity);
            expect(quantity * 2).to.be.equal(warehouse.occupiedCapacity());
        });
    });

    describe('"revision" tests', function () {
        it('when occupied capacity is 0, return appropriate string', function () {
            const actual = warehouse.revision();
            const expected = 'The warehouse is empty';

            expect(actual).to.be.equal(expected);
        });

        it('when occupied capacity is > 0, return appropriate string', function () {
            warehouse.addProduct(food, foodProduct, 3);
            warehouse.addProduct(drink, drinkProduct, 2);

            const expected =
                'Product type - [Food]\n' +
                `- ${foodProduct} 3\n` +
                'Product type - [Drink]\n' +
                `- ${drinkProduct} 2`;
            const actual = warehouse.revision();

            expect(actual).to.be.equal(expected);
        });
    });

    describe('"scrapeAProduct tests"', function () {
        it('when trying to scrape an unexisting product, throw appropriate message', function () {
            const unexistingProductName = 'Ramen';
            const expectedThrowMessage = `${unexistingProductName} do not exists`; //broken english
            expect(function () {
                warehouse.scrapeAProduct(unexistingProductName, 5);
            }).to.throw(expectedThrowMessage);
        });

        it('when scraping an existing product, work properly', function () {
            warehouse.addProduct(food, foodProduct, 8);
            warehouse.scrapeAProduct(foodProduct, 3);
            const actualQuantityLeft = warehouse.availableProducts[food][foodProduct];
            const expectedQuantityLeft = 5;

            expect(actualQuantityLeft).to.be.equal(expectedQuantityLeft);
        });

        it('when scraping an existing product with quantity MORE than available, return 0', function () {
            warehouse.addProduct(food, foodProduct, 3);
            warehouse.scrapeAProduct(foodProduct, 8);

            const actualQuantityLeft = warehouse.availableProducts[food][foodProduct];
            const expectedQuantityLeft = 0;

            expect(actualQuantityLeft).to.be.equal(expectedQuantityLeft);
        });
    });
});

