function addItem() {
    const optionTemplate = document.createElement('option');

    const createOptionViaTemplate = (optionTemplate, text, value) => {
        const result = optionTemplate.cloneNode(true);
        result.innerHTML = text + result.innerHTML;
        result.setAttribute('value', value);
        return result;
    };

    const inputElementText = document.querySelector('input#newItemText');
    const inputElementValue = document.querySelector('input#newItemValue');
    const selectElement = document.querySelector('select#menu');

    selectElement.appendChild(createOptionViaTemplate(optionTemplate, inputElementText.value, inputElementValue.value));
    inputElementText.value = '';
    inputElementValue.value = '';
}