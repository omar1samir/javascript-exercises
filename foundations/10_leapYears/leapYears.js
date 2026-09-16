const leapYears = function (year) {
    // a year is leap year is divisible by 4 and not by 100
        // or if it is divisible evenly by 400
    // and it is not when it is divisible by 4 AND 100

    let isLeap = false;
    if ((year % 4 === 0 && year % 100 !== 0)
        || (year % 400 === 0)) {
            isLeap = true;
        }

    return isLeap;
};

// console.log(leapYears(1996));  // leap
// console.log(leapYears(1800));  // not leap
// console.log(leapYears(2000));  // leap
// all good

// Do not edit below this line
module.exports = leapYears;
