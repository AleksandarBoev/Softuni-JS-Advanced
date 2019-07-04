function cars(arrayOfInputs) {
    const objects = {};
    function toStringObject() {
        const result = [];
        let currentObject = this;

        while (true) {
            const kvpArray = Object.entries(currentObject);
            kvpArray.forEach(kvp => result.push(`${kvp[0]}:${kvp[1]}`));
            currentObject = Object.getPrototypeOf(currentObject);
            if (currentObject === null) {
                break;
            }
        }

        return result.join(', ');
    }

    arrayOfInputs.forEach(input => {
        const tokens = input.split(' ');
        const command = tokens[0];
        const name = tokens[1];

        if (command === 'create') {
            if (tokens.length === 2) {
                objects[name] = {};
            } else if (tokens.length === 4) {
                const inheritName = tokens[3];
                objects[name] = Object.create(objects[inheritName]);
            }
        } else if (command === 'set') {
            const newPropertyName = tokens[2];
            const newPropertyValue = tokens[3];
            objects[name][newPropertyName] = newPropertyValue;
        } else if (command === 'print') {
            console.log(toStringObject.call(objects[name])); //call the function, giving it new context
        }
    })
}

// cars(['create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2']
// );