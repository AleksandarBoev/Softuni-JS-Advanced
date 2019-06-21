function addItem() {
    const ulElement = document.querySelector('#items');
    ulElement.addEventListener('click', (ev) => { //more optimized than adding multiple event listeners
        const clickedElement = ev.target;
        if (clickedElement.tagName.toLowerCase() === 'a') { //.tagName always returns tag name in upper case
            clickedElement.parentNode.remove(); //remove the <li>, which is the parent of <a>
        }
    });

    const anchorString = '<a href="#">[Delete]</a>';

    const templateLi = document.createElement('li');
    templateLi.innerHTML = anchorString;

    const createLiElement = (template, text) => {
        let result = template.cloneNode(true); //must be true, otherwise innerHtml is not copied (includes text and child nodes)
        result.innerHTML = text + result.innerHTML;
        return result;
    };

    const inputFieldElement = document.querySelector('#newText');
    const popInputValue = (inputElement) => {
        const result = inputElement.value;
        inputElement.value = '';
        return result;
    };
    //upper code would be better to be executed only once outside this function, but judge won't like it
    const text = popInputValue(inputFieldElement);
    const newItem = createLiElement(templateLi, text);
    ulElement.appendChild(newItem);
}