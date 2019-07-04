// const calculator = (
    function getSumObject() {
    let num1InputElement;
    let num2InputElement;
    let resultInputElement;

    function init(num1Selector, num2Selector, resultSelector) {
        num1InputElement = document.querySelector(num1Selector);
        num2InputElement = document.querySelector(num2Selector);
        resultInputElement = document.querySelector(resultSelector);
    }

    function add() {
        resultInputElement.value = Number(num1InputElement.value) + Number(num2InputElement.value);
    }

    function subtract() {
        resultInputElement.value = Number(num1InputElement.value) - Number(num2InputElement.value);
    }

    return{
        init,
        add,
        subtract,
    }
}
// )();