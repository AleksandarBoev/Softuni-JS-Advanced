function attachGradientEvents() {
    const MIN = 8;
    const MAX = 310;

    const getPercentage = (min, max, current) => {
        return Math.floor((current / (min + max)) * 100);
    };

    const divElementResult = document.querySelector('div#result');
    const divElementGradient = document.querySelector('div#gradient');

    divElementGradient.addEventListener('mousemove', (ev) => {
        divElementGradient.textContent = getPercentage(MIN, MAX, ev.clientX) + '%';
    });
}