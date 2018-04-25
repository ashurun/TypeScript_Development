// Hello World App
var output = "Hello TypeScript";
console.log(output);
document.getElementById('display').innerHTML = output;
/*

DataTypes in TypeScript

1.Boolean
2.Number
3.String
4.array[]
5.any

 */
// Boolean
var isTSEasy = true;
console.log(isTSEasy);
document.getElementById('display').innerHTML = isTSEasy + "";
// Number
var num1 = 10;
output = "The value of num1 is : " + num1;
console.log(output);
document.getElementById('display').innerHTML = output;
// String
var myName = "Naveen";
output = "My name is : " + myName;
console.log(output);
document.getElementById('display').innerHTML = output;
// array[]
var myArray = ['html', 'css', 'javascript'];
output = "The Array values are : " + myArray.join('-');
console.log(output);
document.getElementById('display').innerHTML = output;
