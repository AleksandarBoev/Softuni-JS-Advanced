(
    function () {
        /**
         * Append str to the beginning of a string, only if it’s not already present
         * @param str
         */
        function ensureStart(str) {
            if (!this.toString().startsWith(str)) {
                return str + this.toString();
            }
        }

        /**
         * Append str to the end of a string, only if it’s not already present
         * @param str
         */
        function ensureEnd(str) {
            if (!str.endsWith(str)) {
                return this.toString() + str;
            }
        }

        /**
         * Return true if the string is empty, false otherwise
         * @return Boolean
         */
        function isEmpty() {
            return this.toString().length === 0;
        }

        /**
         * Truncates the string to n characters by removing words and appends an ellipsis
         * (three periods) to the end. If a string is less than n characters long,
         * return the same string. If it is longer, split the string where a space
         * occurs and append an ellipsis to it so that the total length is less than
         * or equal to n. If no space occurs anywhere in the string, return n - 3
         * characters and an ellipsis. If n is less than 4, return n amount of periods.
         *
         * @param n
         */
        function truncate(n) {
            let string = this.toString();
            if (n > string.length) {
                return string;
            }

            if (n < 4) {
                return '.'.repeat(n);
            }

            if (!string.contains(' ')) {
                return string.slice(0, n - 3) + '...';
            }

            const truncatedString = string.slice(0, string.length - n);

            const wordsInOriginalString = string.split(' ');
            const wordsInTruncatedString = truncatedString.split(' ');

            /*
            let's say the string is "I am legend"
                                     012345678910
            and the truncate n = 8 --> I a
            wordsInOriginalString = [I, am, legend]
            wordsInTruncatedString = [I, a]

            if part of the word is missing, then get rid of the word
             */

            const wordIndexCompare = wordsInTruncatedString.length - 1;
            if (wordsInOriginalString[wordIndexCompare] !== wordsInTruncatedString[wordIndexCompare]) {
                wordsInTruncatedString.pop();
            }

            return wordsInTruncatedString.join(' ') + '...';
        }

        function format(string, ...params) {
            const valueReplacement = {};
            let foundPlaceHolder;
            while ((foundPlaceHolder = regex.exec(wat))) {
                const placeHolder = foundPlaceHolder.toString();
                const index = Number(placeHolder.slice(1, placeHolder.length - 1));

                if (params.length - 1 < index) {
                    continue;
                }

                valueReplacement[placeHolder] = params[index];
            }

            for (let currentPlaceHolder of Object.keys(valueReplacement)) {
                string = string.replace(currentPlaceHolder, valueReplacement[currentPlaceHolder]);
            }

            return string;
        }

        const strObject = Object.getPrototypeOf('');
        strObject.ensureStart = ensureStart;
        strObject.ensureEnd = ensureEnd;
        strObject.isEmpty = isEmpty;
        strObject.truncate = truncate;
        Object.getPrototypeOf(strObject).format = format;
    }
)();

