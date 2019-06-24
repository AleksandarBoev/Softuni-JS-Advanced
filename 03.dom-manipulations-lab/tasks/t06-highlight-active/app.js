function focus() {
    const divElementGroup = document.querySelector('div');
    divElementGroup.addEventListener('click', ev => {
        const clickedElement = ev.target;
        if (clickedElement.tagName === 'INPUT') {
            [...divElementGroup.children].forEach(div => div.classList.remove('focused'));

            clickedElement.parentNode.classList.add('focused');
        }
    });
}