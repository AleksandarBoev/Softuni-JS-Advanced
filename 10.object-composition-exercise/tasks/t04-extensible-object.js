const myObj = {
    /**
     * @param template {Object}
     */
    extend: function (template) {
        const propertyNames = Object.keys(template);

        for (let currentPropertyName of propertyNames) {
            if (typeof template[currentPropertyName] === 'function') {
                Object.getPrototypeOf(this)[currentPropertyName] = template[currentPropertyName];
            } else {
                this[currentPropertyName] = template[currentPropertyName];
            }
        }
    },
};

// const obj1 = {
//     id: '1111',
//     grade: 5.81,
// };
//
// const obj2 = {
//     greet: function() {
//         console.log('Hello');
//     }
// };
//
// myObj.extend(obj1);
// myObj.extend(obj2);
//
// console.log(myObj);
// console.log(Object.getPrototypeOf(myObj));
