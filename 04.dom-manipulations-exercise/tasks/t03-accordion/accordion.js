function toggle() {
    const buttonSpanElement = document.querySelector('div#accordion div.head span.button');
    const textDivElement = document.querySelector('div#extra');

    if (buttonSpanElement.textContent === 'More') {
        buttonSpanElement.textContent = 'Less';
        textDivElement.style.display = 'block';
    } else {
        buttonSpanElement.textContent = 'More';
        textDivElement.style.display = 'none';
    }
}