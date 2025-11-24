//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

//module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};
// Temperature data (C = Celsius, F = Fahrenheit)
let temps = [
  { value: 18, unit: "C" },
  { value: 70, unit: "F" },
  { value: 22, unit: "C" },
  { value: 75, unit: "F" },
  { value: 20, unit: "C" },
  { value: 68, unit: "F" },
  { value: 21, unit: "C" },
  { value: 73, unit: "F" },
  { value: 19, unit: "C" },
  { value: 77, unit: "F" }
];

// Conversion functions
function cToF(celsius) {
  return (celsius * 9/5) + 32;
}

function fToC(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Totals
let tot_temperature_in_celsius = 0;
let tot_temperature_in_fahrenheit = 0;

// Loop through data
for (let temp of temps) {
  if (temp.unit === "F") {
    let c = fToC(temp.value);
    tot_temperature_in_celsius += c;
    tot_temperature_in_fahrenheit += temp.value;
  } else {
    let f = cToF(temp.value);
    tot_temperature_in_fahrenheit += f;
    tot_temperature_in_celsius += temp.value;
  }
}

// Averages
let avg_temperature_in_celsius = tot_temperature_in_celsius / temps.length;
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / temps.length;

// Optional: log results
console.log("Average in °C:", avg_temperature_in_celsius);
console.log("Average in °F:", avg_temperature_in_fahrenheit);

// Export for testing
module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius
};