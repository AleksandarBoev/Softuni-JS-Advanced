function notify(message) {
    const notificationDivElement = document.querySelector('div#notification');
    notificationDivElement.textContent = message;
    notificationDivElement.style.display = 'block';
    setTimeout(() => {
        notificationDivElement.style.display = 'none';
        notificationDivElement.textContent = '';
    }, 2000);
}