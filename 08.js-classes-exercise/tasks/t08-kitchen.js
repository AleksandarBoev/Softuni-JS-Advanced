class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = []; //TODO not sure what this is about
    }

    loadProducts(arrayOfProductsInfo) {
        for (const productInfo of arrayOfProductsInfo) {
            const productTokens = productInfo.split(' ');
            const name = productTokens[0];
            const quantity = Number(productTokens[1]);
            const price = Number(productTokens[2]);

            if (price > this.budget) {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`);
                continue;
            }

            if (this.productsInStock[name] === undefined) {
                this.productsInStock[name] = 0;
            }

            this.productsInStock[name] += quantity;
            this.budget -= price;
            this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`);
        }

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal] !== undefined) {
            return `The ${meal} is already in our menu, try something different.`;
        }

        const neededProductsObject = {};
        neededProducts.forEach(p => {
            const name = p.split(' ')[0];
            const quantity = Number(p.split(' ')[1]);
            neededProductsObject[name] = quantity;
        });

        this.menu[meal] = {
            neededProducts: neededProductsObject,
            price: price,
        };

        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals on the menu, other ideas?`;
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        let result = '';
        Object.entries(this.menu).forEach(kvpArray => {
            result += `${kvpArray[0]} - $ ${kvpArray[1].price}\n`;
        });

        return result.trim();
    }

    makeTheOrder(meal) {
        if (this.menu[meal] === undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        //"For the time being, we cannot complete your order ({meal}), we are very sorry..."
        const neededProducts = this.menu[meal].neededProducts;

        for (let productName in neededProducts) {
            //if there is no such product, or the quantity is no enough, then the meal can't be prepared
            if (this.productsInStock[productName] === undefined ||
                neededProducts[productName] > this.productsInStock[productName]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        //all products are enough!
        for (let productName in neededProducts) {
            this.productsInStock[productName] -= neededProducts[productName];
        }

        this.budget += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

// let neededProducts = ['Pizza 3', 'Ham 12', 'Tofu 13', 'Paprika 190'];
// let kitchen = new Kitchen (1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
//
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());
// console.log(kitchen.makeTheOrder('frozenYogurt'));
// console.log(kitchen);

