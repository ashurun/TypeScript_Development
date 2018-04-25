/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/
// Normal Function
var greet = function () {
    return "Good Morning From Greet()";
};
var output = greet();
console.log(output);
document.getElementById('display').innerHTML = output;
// Arrow Function
var greetArrow = function () { return "Good Morning From Arrow"; };
output = greetArrow();
console.log(output);
document.getElementById('display').innerHTML = output;
// Normal Function 2
var greetMe = function (name) {
    return "Good Morning " + name;
};
output = greetMe('Naveen');
console.log(output);
document.getElementById('display').innerHTML = output;
// Arrow Function
var greetMeArrow = function (name) { return "Good Afternoon " + name; };
output = greetMeArrow('John');
console.log(output);
document.getElementById('display').innerHTML = output;
// Normal Function 3
var sum = function (a, b) {
    return a + b;
};
output = "The Sum of a , b is : " + sum(10, 20);
console.log(output);
document.getElementById('display').innerHTML = output;
// Arrow Function
var sumArrow = function (a, b) { return a + b; };
output = "The Sum of a , b is : " + sumArrow(10, 20);
console.log(output);
document.getElementById('display').innerHTML = output;
// Normal Function 4
var myArray = ['HTML', 'CSS', 'JavaScript'];
var arrLength = function (myArray) {
    return myArray.length;
};
output = "Length of myArray is : " + arrLength(myArray);
console.log(output);
document.getElementById('display').innerHTML = output;
// Arrow Function
var arrLengthArrow = function (a) { return a.length; };
output = "Length of the Array is : " + arrLengthArrow(myArray);
console.log(output);
document.getElementById('display').innerHTML = output;
// Normal Function 5
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
output = "The Output is : " + movieLength;
console.log(movieLength);
document.getElementById('display').innerHTML = output;
// Arrow Function
var movieLengthArrow = movies.map(function (movie) { return movie.length; });
output = "The Arrow Function Output is " + movieLengthArrow;
console.log(movieLength);
document.getElementById('display').innerHTML = output;
