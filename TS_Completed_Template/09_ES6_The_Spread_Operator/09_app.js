/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
// Create an array and pass it as an argument to a method which takes in o -
// more number of parameters
var myArray = [1001, 'Naveen', 'TechLead'];
function acceptArgs() {
    var values = "";
    for (var i = 0; i < arguments.length; i++) {
        values += arguments[i] + " ";
    }
    return values;
}
var output = acceptArgs.apply(void 0, myArray); // spread operator
console.log(output);
document.getElementById('display').innerHTML = output;
// Use the spread operator to insert elements in the middle of an array
var arr1 = [3, 4, 5];
var arr2 = [1, 2].concat(arr1, [6, 7]);
output = "The arr2 elments are : " + arr2.join(" , ");
console.log(output);
document.getElementById('display').innerHTML = output;
// Use Spread operator to create a new array with the copy of existing array
arr1 = [10, 20, 30, 40, 50];
arr2 = arr1.slice(); // to create a separate copy
output = "";
if (arr1 === arr2) {
    output = "Both arr1 , arr2 are  Equal";
}
else {
    output = "Both arr1 , arr2 are NOT Equal";
}
console.log(output);
document.getElementById('display').innerHTML = output;
// Use Spread operator to concatenate two or more number of arrays
arr1 = [10, 20, 30];
arr2 = [40, 50, 60];
var arr3 = arr1.concat(arr2);
output = "The arr3 values : " + arr3.join(" , ");
console.log(output);
document.getElementById('display').innerHTML = output;
// Use Spread operator in conjunction with Math Object
arr1 = [10, 20, 30, 40, 50];
output = "The Min value is " + Math.min.apply(Math, arr1);
console.log(output);
document.getElementById('display').innerHTML = output;
