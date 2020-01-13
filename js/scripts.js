

// var add = function(number1, number2){
//     return number1 + number2;
// };

// var number1 = parseInt(prompt("Enter a number: "));

// var number2 = parseInt(prompt("Enter another number: "));

// var result = add(number1, number2);

// alert(result);


var height = parseInt(prompt("Enter your heights in inches: "));
var weight = parseInt(prompt("Enter your weight with pounds: "));
var BMI    = ( weight / (height * height)) * 703;

alert(BMI);