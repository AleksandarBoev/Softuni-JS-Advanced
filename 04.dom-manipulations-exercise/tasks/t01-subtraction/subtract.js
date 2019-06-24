function subtract() {
    document.querySelector('div#result').textContent =
        Number(document.querySelector('input#firstNumber').value) -
        Number(document.querySelector('input#secondNumber').value);
}