const sumAll = function(a, b) {
    // if the inputs are not positive integers return 'ERROR'
    if (typeof(a) !== 'number' || !Number.isInteger(a) || a <= 0
    || typeof(b) !== 'number' || !Number.isInteger(b) || b <= 0)
        return 'ERROR'
    

    // find min and max
    let min = Math.min(a, b);
    let max = Math.max(a, b);

    // loop from min to max 
    let sum = 0;
    for (let i = min; i <= max; i++)
        // sum all numbers on the way
        sum += i;
    

    // return the sum 
    return sum
};

// console.log(sumAll(4, 1));

// Do not edit below this line
module.exports = sumAll;
