function lockedProfile() {
    const CONSTANTS = {
        show: 'Show more',
        hide: 'Hide it',
    };

    const buttonFunction = ev => {
        //<input type="radio" name="user1Locked" value="lock" checked>
        const clickedButtonElement = ev.target;
        const lockRadioButton = clickedButtonElement.parentNode.querySelector('input[type="radio"][value="lock"]');

        if (lockRadioButton.checked) {
            return;
        }

        const buttonText = clickedButtonElement.textContent;
        const hiddenFieldsDivElement = clickedButtonElement.previousElementSibling;

        if (buttonText === CONSTANTS.show) {
            clickedButtonElement.textContent = CONSTANTS.hide;
            hiddenFieldsDivElement.style.display = 'block';
        } else if (buttonText === CONSTANTS.hide) {
            clickedButtonElement.textContent = CONSTANTS.show;
            hiddenFieldsDivElement.style.display = 'none';
        }
    };

    const profileButtonsElements = [...document.querySelectorAll('div.profile button')].forEach(b => {
        b.addEventListener('click', buttonFunction);
    });
}