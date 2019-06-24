function attachEventsListeners() {
    //TODO there's probably a smarter way of solving this
    const timeConverter = (() => {
        const timesInSeconds = {
            second: 1,
            minute: 60,
            hour: 3600,
            day: 86400,
        };

        return {
            secondsToMinutes: seconds => seconds / timesInSeconds.minute,
            minutesToSeconds: minutes => minutes * timesInSeconds.minute,
            secondsToHours: seconds => seconds / timesInSeconds.hour,
            hoursToSeconds: hours => hours * timesInSeconds.hour,
            secondsToDays: seconds => seconds / timesInSeconds.day,
            daysToSeconds: days => days * timesInSeconds.day,
        }
    })();

    const secondsInputElement = document.querySelector('input#seconds');
    const secondsButtonElement = document.querySelector('input#secondsBtn');

    const minutesInputElement = document.querySelector('input#minutes');
    const minutesButtonElement = document.querySelector('input#minutesBtn');

    const hoursInputElement = document.querySelector('input#hours');
    const hoursButtonElement = document.querySelector('input#hoursBtn');

    const daysInputElement = document.querySelector('input#days');
    const daysButtonElement = document.querySelector('input#daysBtn');

    secondsButtonElement.addEventListener('click', () => {
        const seconds = Number(secondsInputElement.value);

        minutesInputElement.value = timeConverter.secondsToMinutes(seconds);
        hoursInputElement.value = timeConverter.secondsToHours(seconds);
        daysInputElement.value = timeConverter.secondsToDays(seconds);
    });

    minutesButtonElement.addEventListener('click', () => {
        const minutes = Number(minutesInputElement.value);

        const seconds = timeConverter.minutesToSeconds(minutes);
        secondsInputElement.value = seconds;
        hoursInputElement.value = timeConverter.secondsToHours(seconds);
        daysInputElement.value = timeConverter.secondsToDays(seconds);
    });

    hoursButtonElement.addEventListener('click', () => {
        const hours = Number(hoursInputElement.value);

        const seconds = timeConverter.hoursToSeconds(hours);
        secondsInputElement.value = seconds;
        minutesInputElement.value = timeConverter.secondsToMinutes(seconds);
        daysInputElement.value = timeConverter.secondsToDays(seconds);
    });

    daysButtonElement.addEventListener('click', () => {
        const days = Number(daysInputElement.value);

        const seconds = timeConverter.daysToSeconds(days);
        secondsInputElement.value = seconds;
        minutesInputElement.value = timeConverter.secondsToMinutes(seconds);
        hoursInputElement.value = timeConverter.secondsToHours(seconds);
    })
}