const obj1 = {
    name: 'Aleksandar',
    age: 23,
};

function someFunc() {
    console.log(this);
}

function someFuncAuthor(author) {
    console.log(this, author);
}

const obj2 = {};
obj2.printObj1 = someFunc.bind(obj1);
obj2.printObj1(); //{ name: 'Aleksandar', age: 23 }

obj2.printObj1Author = someFuncAuthor.bind(obj1, 'Tosho');
obj2.printObj1Author('Gosho'); //{ name: 'Aleksandar', age: 23 } Tosho

obj2.printObj1Author = someFuncAuthor.bind(obj1);
obj2.printObj1Author('Gosho'); //{ name: 'Aleksandar', age: 23 } Gosho