function validate() {
    const emailIsValid = email => {
        const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        return regex.test(email);
    };

    const inputElementEmail = document.querySelector('input#email');

    inputElementEmail.addEventListener('change', () => {
        const email = inputElementEmail.value;

        if (emailIsValid(email)) {
            inputElementEmail.classList.remove('error');
        } else {
            inputElementEmail.classList.add('error'); //.classList behaves like a Set. Will not add multiple error classes
        }
    });
}