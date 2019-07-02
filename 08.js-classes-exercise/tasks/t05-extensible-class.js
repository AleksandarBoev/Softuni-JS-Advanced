// const solution =
(function() {
    class Extensible {
        static incrementCounter() {
            if (Extensible.counter === undefined) {
                Extensible.counter = 0;
            } else {
                Extensible.counter++;
            }
        }

        constructor() {
            Extensible.incrementCounter();
            this.id = Extensible.counter;
        }

        extend(template) {
            const properties = {};
            const functions = {};

            Object.entries(template).forEach(kvpArray => {
                const typeOfValue = typeof kvpArray[1];
                if (typeOfValue === 'function') {
                    functions[kvpArray[0]] = kvpArray[1];
                } else {
                    properties[kvpArray[0]] = kvpArray[1];
                }
            });

            for (let fieldName in properties) {
                this[fieldName] = properties[fieldName];
            }

            for (let methodName in functions) {
                Object.getPrototypeOf(this)[methodName] = functions[methodName];
            }
        }
    }

    return Extensible;
})()

//
// let obj1 = new solution();
// let obj2 = new solution();
// let obj3 = new solution();
// console.log(obj1.id);
// console.log(obj2.id);
// console.log(obj3.id);
//
// const template = {
//     extensionMethod: function () {
//         console.log('extension method!!!')
//     },
//     extensionProperty: 'JS is weird',
// };
//
// obj1.extend(template);
//
// console.log(obj1.extensionProperty); //prints string
// console.log(obj2.extensionProperty); //undefined
//
// obj1.extensionMethod(); //prints
// obj2.extensionMethod(); //prints
