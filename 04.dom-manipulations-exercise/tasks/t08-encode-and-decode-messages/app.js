function encodeAndDecodeMessages() {
    const changeCharCode = (character, amount) => String.fromCharCode(character.charCodeAt(0) + amount);

    /**
     * @param string {String} String on which characters will be changed by the function
     * @param characterChangeFunction {Function} Single param function, which will be applied to each character
     * @returns {string|string} Mutated string
     */
    const getChangedString = (string, characterChangeFunction) => {
        let result = '';
        for (let i = 0; i < string.length; i += 1) {
            result += characterChangeFunction(string[i]);
        }

        return result;
    };

    //Using the "Partial Application" trick.
    //Create new functions which do the same things, just with a fixed second param.
    const encoderFunction = character => changeCharCode(character, 1);
    const decoderFunction = character => changeCharCode(character, -1);

    const encodeAndDecodeDivElements = document.querySelector('main#main').children;
    const encodeDivElement = encodeAndDecodeDivElements[0];
    const decodeDivElement = encodeAndDecodeDivElements[1];

    const cypherElement = (divElement) => {
        const textAreaElement = divElement.querySelector('textarea');
        const buttonElement = divElement.querySelector('button');

        return {
            getTextAreaElement: textAreaElement,
            getButtonElement: buttonElement,
        }
    };

    const encodeCypher = cypherElement(encodeDivElement);
    const decodeCypher = cypherElement(decodeDivElement);

    encodeCypher.getButtonElement.addEventListener('click', () => {
        const messageToBeEncoded = encodeCypher.getTextAreaElement.value;
        encodeCypher.getTextAreaElement.value = '';
        const encodedMessage = getChangedString(messageToBeEncoded, encoderFunction);
        decodeCypher.getTextAreaElement.value = encodedMessage;
    });

    decodeCypher.getButtonElement.addEventListener('click', () => {
        const messageToBeDecoded = decodeCypher.getTextAreaElement.value;
        const decodedMessage = getChangedString(messageToBeDecoded, decoderFunction);
        decodeCypher.getTextAreaElement.value = decodedMessage;
    });
}