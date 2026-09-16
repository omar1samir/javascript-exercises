const removeFromArray = function(arr, ...deleteArgs) {
    // loop through the arr
    for (let i = 0; i < deleteArgs.length; i++){
        // filter the 
        return arr.filter(element => !deleteArgs.includes(element));
    } 
};

// console.log(removeFromArray([1, 2, 3, 4, 5, 6], 3, 6));

// Do not edit below this line
module.exports = removeFromArray;
