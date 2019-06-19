function solution() {
    const availableIngredients = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0,
        report: function () { //in "fat-arrow" functions, "this" refers to something else.
            // const allIngredients = Object.entries(this).filter(entry => entry[0] !== 'report'); //first way of doing it
            return `protein=${this.protein} carbohydrate=${this.carbohydrate} fat=${this.fat} flavour=${this.flavour}`;
        }
    };

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    };

    const prepareRecipe = (recipeName, count) => {
        const recipe = recipes[recipeName];

        const totalIngredientsNeeded = {
            carbohydrate: 0,
            flavour: 0,
            fat: 0,
            protein: 0,
        };

        let canBePrepared = true;
        for (const ingredientName in recipe) {
            const currentIngredientCount = recipe[ingredientName] * count;
            if (availableIngredients[ingredientName] < currentIngredientCount) {
                return `Error: not enough ${ingredientName} in stock`;
            }

            totalIngredientsNeeded[ingredientName] = currentIngredientCount;
        }

        for (const ingredientName in recipe) { //if available ingredients are enough, start removing them
            availableIngredients[ingredientName] -= totalIngredientsNeeded[ingredientName];
        }

        return 'Success';
    };

    return (input) => {
        const tokens = input.split(' ');
        const command = tokens[0];

        switch (command) {
            case 'restock':
                const ingredientName = tokens[1];
                const ingredientCount = Number(tokens[2]);
                availableIngredients[ingredientName] += ingredientCount;
                return 'Success';

            case 'prepare':
                const recipeName = tokens[1];
                const prepareCount = Number(tokens[2]);
                return prepareRecipe(recipeName, prepareCount);

            case 'report':
                return availableIngredients.report();
        }
    }
}

// let manager = monkeyPatcher();
//
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock protein 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('report'));