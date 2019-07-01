const someFunc = (function () {
    const field = 5;
    const field2 = 'tosho';

    const logStuff = () => {
        console.log(this);
    };

    const logStuff4 = function () {
        console.log(this);
    };

    return {
        logStuff,
        logStuff2: () => {
            console.log(this);
        },
        logStuff3: function () {
            console.log(this);
        },
        wat: logStuff4,
    }
})();

// someFunc.logStuff();
// someFunc.logStuff2();
// someFunc.logStuff3();
someFunc.wat();



