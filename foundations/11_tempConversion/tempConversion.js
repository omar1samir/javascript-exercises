const convertToCelsius = function(x) {
  // formula
  // x °F = (x - 32) * 5/9 °C
  let celsius = (x - 32) * 5/9;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(x) {
  // formula
  // x °C = (x * 9/5 + 32) °F
  let fahrenheit = (x * 9 / 5 + 32)
  return Math.round(fahrenheit * 10) / 10;
};

// console.log(convertToFahrenheit(0));
// console.log(convertToCelsius(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
