var htmlElement = document.getElementById('display');
// Create a simple function to add two numbers
function add(a, b) {
    var sum = a + b;
    return sum;
}
var output = "The Sum of a , b is  " + add(10, 20);
console.log(output);
htmlElement.innerHTML = output;
// Create the same add function with first number as 'any' type
function addAny(a, b) {
    var sum = 0;
    if (typeof a === 'string') {
        if (isNaN(parseFloat(a))) {
            sum = b;
        }
        else {
            a = parseFloat(a);
            sum = a + b;
        }
    }
    else if (typeof a === 'number') {
        sum = a + b;
    }
    else {
        sum = b;
    }
    return sum;
}
output = "The Sum is : " + addAny("10", 20);
console.log(output);
htmlElement.innerHTML = output;
// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers
// Function Overloading in TypeScript , findMin using Math
// Create an Employee function and get an Employee Object
