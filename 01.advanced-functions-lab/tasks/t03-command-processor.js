function commandProcessor() {
        let string = '';
        return {
            /**
             * @param str {String}
             */
            'append': (str) => {
                string += str;
            },
            /**
             * @param n {Number}
             */
            'removeStart': (n) => {
                string = string.substring(n);
            },
            /**
             * @param n {Number}
             */
            'removeEnd': (n) => {
                string = string.substring(0, string.length - n);
            },
            'print': () => {
                console.log(string);
            }
        }
}

// let firstZeroTest = commandProcessor();
//
// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// firstZeroTest.print();
