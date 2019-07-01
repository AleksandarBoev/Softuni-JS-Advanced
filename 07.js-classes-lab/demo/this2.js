function ClassFunction(param1, param2) {
    this.name = param1;
    this.age = param2;

    this.innerClassicFunc = function () {
        console.log(this);
    };

    this.innerArrowFunc = () => {
        console.log(this);
    }
}

const object = new ClassFunction('Aleksandar', 23);

object.innerClassicFunc(); // prints ClassFunction
object.innerArrowFunc(); // prints ClassFunction
console.log('________________________________');
function outerClassicFunc () {
    console.log(this);
}

const outerArrowFunc = () => {
    console.log(this);
};

outerClassicFunc(); // prints global
outerArrowFunc(); // prints "{}"
console.log('________________________________');
object['outerClassicFunc'] = outerClassicFunc;
object['outerArrowFunc'] = outerArrowFunc;
object.outerClassicFunc(); // prints ClassicFunction
object.outerArrowFunc(); // just "{}"


