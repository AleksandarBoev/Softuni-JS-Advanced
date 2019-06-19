function personalBmi(name, age, massKg, heightCm) {
    const getBmi = (massKg, heightCm) => massKg / ((heightCm / 100) ** 2);

    const bmi = Math.round(getBmi(massKg, heightCm));

    const getStatus = (bmiValue) => {
        if (bmiValue < 18.5) {
            return 'underweight';
        } else if (bmiValue < 25) {
            return 'normal';
        } else if (bmiValue < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    };

    const status = getStatus(bmi);

    let result = {
        'name': name,
        'personalInfo': {
            'age': age,
            'weight': massKg,
            'height': heightCm,
        },
        'BMI': bmi,
        'status': status
    };

    if (status === 'obese') {
        result.recommendation = 'admission required';
    }

    return result;
}

// personalBmi('Honey Boo Boo', 9, 57, 137);