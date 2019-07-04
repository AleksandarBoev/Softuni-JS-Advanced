const fatherObj = {
    name: 'Pro',
    price: 19.99,
    greet: () => {
        console.log('Zdrastiii');
    },
    obj: {
        townName: 'Sofia',
        population: 1000000,
    }
};

const sonObj = Object.create(fatherObj);
sonObj.newProperty = 'Hello';

console.log(sonObj.name); //Pro
console.log(sonObj.price); //19.99
sonObj.greet(); //Zdrastiii
console.log(sonObj.newProperty); //Hello
console.log(sonObj); //{ newProperty: 'Hello' }

sonObj.name = 'Nub';
console.log(sonObj.name); //Nub
console.log(fatherObj.name); //Pro

console.log(sonObj); //only new / updated properties displayed

console.log(Object.getPrototypeOf(sonObj)); //prints fatherObj

sonObj.obj.townName = 'Plovdiv';
console.log(fatherObj); //fatherObj's townName is also changed.