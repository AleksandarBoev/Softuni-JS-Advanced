class Stringer {
    constructor(string, initialLength) {
        this.innerString = string;
        this.innerLength = initialLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        if (length > this.innerLength) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }

    toString() {
        const result = this.innerString.slice(0, this.innerLength);
        if (result === this.innerString) {
            return result;
        } else {
            return result + '...';
        }
    }
}

// let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test
//
// test.decrease(3);
// console.log(test.toString()); // Te...
//
// test.decrease(5);
// console.log(test.toString()); // ...
//
// test.increase(4);
// console.log(test.toString()); // Test
