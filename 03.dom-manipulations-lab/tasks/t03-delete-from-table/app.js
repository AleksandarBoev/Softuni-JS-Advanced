function deleteByEmail() {
    const searchResultMessages = {
        'error': 'Not found.',
    };

    const email = document.querySelector('input[name="email"]').value;
    const divElementResult = document.querySelector('div#result');
    const tableRows = document.querySelectorAll('table#customers tbody tr');

    for (const tableRow of [...tableRows]) {
        if (tableRow.lastElementChild.textContent === email) {
            tableRow.remove();
            divElementResult.textContent = '';
            return;
        }
    }

    divElementResult.textContent = searchResultMessages.error;
}