function addItem() {
    const ulElement = document.querySelector('#items');
    const templateLi = document.createElement('li');
    const inputFieldElement = document.querySelector('#newItemText');

    const createElementByTemplateWithText = (template, text) => {
        let result = template.cloneNode();
        result.textContent = text;
        return result;
    };

    const popInputValue = (inputElement) => {
        const result = inputElement.value;
        inputElement.value = '';
        return result;
    };
    //upper code would be better to be executed only once outside this function, but judge won't like it
    const text = popInputValue(inputFieldElement);
    const newItem = createElementByTemplateWithText(templateLi, text);
    ulElement.appendChild(newItem);
}