function listProcessor(arrayOfCommands) {
    const innerArray = [];

    arrayOfCommands.forEach(c => {
        const command = c.split(' ')[0];
        const value = c.split(' ')[1];

        switch (command) {
            case 'add':
                innerArray.push(value);
                break;

            case 'remove':
                while (innerArray.includes(value)) {
                    innerArray.splice(innerArray.indexOf(value), 1);
                }
                break;

            case 'print':
                console.log(innerArray.join(','));
                break;
        }
    })
}

// listProcessor(['add peter', 'add george', 'add peter', 'remove peter','print']);