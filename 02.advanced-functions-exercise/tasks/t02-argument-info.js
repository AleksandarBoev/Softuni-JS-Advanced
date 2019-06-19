function argumentInfo(...arr) {
    const typeValue = {};
    // let outputString = '';

    for (const arrElement of arr) {
        const elementType = typeof(arrElement);

        if (typeValue[elementType] === undefined) {
            typeValue[elementType] = 0;
        }

        typeValue[elementType]++;
        // outputString += `${elementType}: ${arrElement}\n`;
        console.log(`${elementType}: ${arrElement}`);
    }

    // console.log(outputString.trim());

    let entries = Object.entries(typeValue); //array of arrays. The arrays are kvp --> 1st element is key, 2nd element is value
    entries = entries.sort((entry1, entry2) => {
        const entry1Count = entry1[1];
        const entry2Count = entry2[1];

        return entry2Count - entry1Count;
    });

    for (const entry of entries) {
        console.log(`${entry[0]} = ${entry[1]}`)
    }
}

// argumentInfo(42, 'cat', 15, 'kitten', 'tomcat');