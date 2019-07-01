class Testing {
    constructor() { //will not raise exception if no constructor is defined
        function printGreeting() { //not sure what's going on
            console.log('Something');
        }
    }

    printGreeting() {
        console.log('Hello from class!');
    }
}

const testObj = new Testing();
testObj.printGreeting(); // hello from class

//can also add a function to the prototype with .prototype['methodName'] = ...
Testing.prototype.printGreeting = () => {
    console.log('Hello from prototype!');
};

testObj.printGreeting(); //hello from prototype

testObj.printGreeting = () => {
    console.log('Hello from instance!');
};

testObj.printGreeting(); //hello from instance

Testing.prototype.printGreeting = () => {
    console.log('Hello from prototype!');
};

testObj.printGreeting();//hello from instance

const testObj2 = new Testing();
testObj2.printGreeting(); //hello from prototype --> dynamically changing the class! wtf

Testing.prototype.field = 100;
console.log(testObj.field); //100
testObj.field = 99;
console.log(testObj.field); //99
console.log(testObj2.field); //100

/*
field is of type number and so doing Testing.prototype.field = ...
means it is making a copy of the value, and not of the reference.
And so changing a value, does not change the reference. A bit confusing
 */

console.log(Testing.prototype); //print class
console.log(testObj2.__proto__); //like obj.getClass()

//old way of using classes, before ECMA 6
function Testing2() { // params are its constructor
    return {
        printGreeting: () => {
            console.log('G\'day!')
        }
    }
}

Testing2.prototype.prototypeFunc= function () { //nope
    console.log('Goodbye!')
};
console.log(Testing2.prototype);
testObj3 = Testing2();
testObj3.printGreeting();
testObj3.prototypeFunc(); //works for the class above, but not here

