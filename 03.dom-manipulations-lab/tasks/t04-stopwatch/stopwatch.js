function stopwatch() {
    /*
    Unexpected error: Stop button didn't work as expected.: expected '00:00' to equal '01:23'
    Works locally tho...
     */
    const DELIMITER = ':';

    const stringToTotalSeconds = (string, delimiter) => {
        const minutesAndSeconds = string.split(delimiter).map(e => Number(e));
        return minutesAndSeconds[0] * 60 + minutesAndSeconds[1];
    };

    const totalSecondsToMinutesAndSeconds = (totalSeconds, delimiter) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return (minutes + '').padStart(2, '0') +
            delimiter + (seconds + '').padStart(2, '0');
    };

    /**
     * @param htmlElement {HTMLElement}
     * @param stringToTotalSeconds {Function}
     * @param totalSecondsToMinutesAndSeconds {Function}
     * @param delimiter {String}
     */
    const incrementTimer = (htmlElement, stringToTotalSeconds, totalSecondsToMinutesAndSeconds, delimiter) => {
        let totalSeconds = stringToTotalSeconds(htmlElement.textContent, delimiter);
        totalSeconds++;
        htmlElement.textContent = totalSecondsToMinutesAndSeconds(totalSeconds, delimiter);
    };

    const divElementTime = document.querySelector('div#time');
    const buttonElementStart = document.querySelector('button#startBtn');
    const buttonElementStop = document.querySelector('button#stopBtn');

    let intervalVariable;

    buttonElementStart.addEventListener('click', () => {
        buttonElementStart.setAttribute('disabled', 'true');
        buttonElementStop.removeAttribute('disabled');

        intervalVariable = setInterval(incrementTimer, 1000,
            divElementTime, stringToTotalSeconds, totalSecondsToMinutesAndSeconds, DELIMITER);
    });

    buttonElementStop.addEventListener('click', () => {
        buttonElementStop.setAttribute('disabled', 'true');
        buttonElementStart.removeAttribute('disabled');

        clearInterval(intervalVariable);
        divElementTime.textContent = totalSecondsToMinutesAndSeconds(0, DELIMITER);
    });
}