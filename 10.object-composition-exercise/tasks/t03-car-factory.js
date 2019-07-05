function carFactory(carSpecifics) {
    const createdCar = {model: carSpecifics.model};

    const carEngines = { //
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 },
        getClosestPower: function (power) {
            let closestPower = Infinity;
            let smallestDifference = Infinity;
            let nameOfClosestPowerEngine;

            const kvpArray = Object.entries(this);
            kvpArray.forEach(kvp => {
                const difference = Math.abs(kvp[1].power - power);
                if (difference < smallestDifference) {
                    closestPower = kvp[1].power;
                    smallestDifference = difference;
                    nameOfClosestPowerEngine = kvp[0];
                }
            });

            return this[nameOfClosestPowerEngine];
        },
    };

    createdCar.engine = carEngines.getClosestPower(carSpecifics.power);

    createdCar.carriage = {type: carSpecifics.carriage, color: carSpecifics.color};

    const wheels = (() => {
        let wheelsize = carSpecifics.wheelsize;
        if (wheelsize % 2 === 0) {
            wheelsize--;
        }

        return [wheelsize, wheelsize, wheelsize, wheelsize];
    })();
    createdCar.wheels = wheels;

    return createdCar;
}

// console.log(carFactory({ model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17 }
// ));
