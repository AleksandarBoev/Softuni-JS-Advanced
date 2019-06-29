function attachEventsListeners() {
    /**
     * Works with: "km" (Kilometers), "m" (Meters), "cm" (Centimeters), "mm" (Millimeters),
     * "mi" (Miles), "yrd" (Yards), "ft" (Feet), "in" (Inches)
     * @param distance {Number}
     * @param from {String}
     * @param to {String}
     */
    const convertDistance = (distance, from, to) => {
        if (distance === 0) {
            return 0;
        }

        const toMeters = {
            m: 1,
            km: 1000,
            cm: 0.01,
            nn: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254,
        };

        const amountInMeters = distance * toMeters[from];
        return amountInMeters / toMeters[to];
    };

    const convertButtonElement = document.querySelector('#convert');

    const inputUnitsSelectElement = document.querySelector('#inputUnits');
    const inputDistanceInputElement = document.querySelector('#inputDistance');

    const outputDistanceInputElement = document.querySelector('#outputDistance');
    const outputUnitsSelectElement = document.querySelector('#outputUnits');

    convertButtonElement.addEventListener('click', () => {
        const convertFrom = inputUnitsSelectElement[inputUnitsSelectElement.selectedIndex].value;
        const convertTo = outputUnitsSelectElement[outputUnitsSelectElement.selectedIndex].value;

        const result = convertDistance(Number(inputDistanceInputElement.value), convertFrom, convertTo);
        outputDistanceInputElement.value = result;
    })
}

