class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.instanceClassicFunc = function () {
            console.log(this);
        };
        this.instanceArrowFunc = () => {
            console.log(this);
        }
    }

    prototypeClassicFunc = function () {
        console.log(this);
    };

    prototypeArrowFunc = () => {
        console.log(this);
    };
}

const personObj = new Person('Aleksandar', 23);

personObj.instanceClassicFunc(); //prints person
personObj.instanceArrowFunc(); //prints person

personObj.prototypeClassicFunc(); //prints person
personObj.prototypeArrowFunc(); //prints person

function outerClassicFunc() {
    console.log(this);
}

const outerArrowFunc = () => {
    console.log(this);
};

console.log('___________________________________');
personObj['outerInstanceClassicFunc'] = outerClassicFunc;
personObj['outerInstanceArrowFunc'] = outerArrowFunc;

personObj.outerInstanceClassicFunc(); //prints person
personObj.outerInstanceArrowFunc(); //prints "{}"

console.log('___________________________________');
Person.prototype.outerPrototypeClassicFunc = outerClassicFunc;
Person.prototype.outerPrototypeArrowFunc = outerArrowFunc;

personObj.outerPrototypeClassicFunc(); //prints person
personObj.outerPrototypeArrowFunc(); //prints "{}"

const person2Obj = new Person('Gosho', 33);
person2Obj.outerPrototypeClassicFunc(); //prints person2, outer prototype funcs still missing
