/*
input:

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
 */

/**
 * @param func {Function}
 */
function currencyFormat(func) {
    return (value) => { //return a single param function
        //this single param function returns the result from the provided func with fixed first three params
        return func(',', '$', true, value);
    }
}

// const singleParamFormatter = currencyFormat((separator, symbol, symbolFirst, value) => {
//     let result = Math.trunc(value) + separator;
//     result += value.toFixed(2).substr(-2,2);
//     if (symbolFirst) return symbol + ' ' + result;
//     else return result + ' ' + symbol;
// });
//
// console.log(singleParamFormatter(120));