const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {

  // console.log(nums);
	return nums.reduce((total, num) => {
    return total + num;
  }, 0);
};

// console.log(sum(1, 2, 3, 4, 5)); // 15 
// console.log(sum(1, 2)); // 3
// console.log(sum()); // 0

const multiply = function(nums) {
  return nums.reduce((total, num) => {
    return total * num;
  });
};
// console.log(multiply(5, 2));      // 10
// console.log(multiply(5, 2, 10));  // 100
const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (num) {
  let result = 0;
  if (num === 0 || num === 1) {
    // base case 
    result = 1
  }else{
    // recursion case
    result = num * (factorial(num - 1))
  }

  return result
};


console.log(factorial(4));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
