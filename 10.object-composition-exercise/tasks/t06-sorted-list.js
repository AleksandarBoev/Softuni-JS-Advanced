function createSortedList() {
    let array = [];

    const sort = () => {
        array = array.sort((e1, e2) => e1.localeCompare(e2));
    };

    const validateIndex = index => {
        if (index < 0 || index >= array.length) {
            throw Error('Index out of bounds!');
        }
    };

    const add = element => {
        array.push(element);
        sort();
    };

    const remove = index => {
        validateIndex(index);
        array.splice(index, 1); //no need to sort
    };

    const get = index => {
        validateIndex(index);
        return array[index];
    };

    return {
        add,
        remove,
        get,
        size: array.length,
    }
}