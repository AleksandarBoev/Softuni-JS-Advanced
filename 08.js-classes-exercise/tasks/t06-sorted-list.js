class List {
    constructor() {
        this.array = [];
        this.size = 0;
    }

    sortArray() {
        this.array = this.array.sort((e1, e2) => e1 - e2);
    }

    add(element) {
        this.array.push(element);
        this.sortArray();
        this.updateSize();
    }

    remove(index) {
        if (index < 0 || index >= this.array.length) {
            return;
        }

        this.array.splice(index, 1);
        this.updateSize();
    }

    get(index) {
        if (index < 0 || index >= this.array.length) {
            return;
        }

        return this.array[index];
    }

    updateSize() {
        this.size = this.array.length;
    }
}
//
// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));
