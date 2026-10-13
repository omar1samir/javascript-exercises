const fibonacci = function (n) {
    
    // type cast to a number
    let num = Number(n);

    if (num < 0){
        return "OOPS";
    }
    
    let result = 0
    if (num === 0) {// base cases

        result = 0;

    } else if (num === 1) {

        result = 1;

    } else {
        // recursion case
        result = fibonacci(num - 1) + fibonacci(num - 2)
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
