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
let greet = function () {
    return "Good Morning From Greet()";
};
let output = greet();
console.log(output);
document.getElementById('display').innerHTML = output;

// Arrow Function
let greetArrow = () => "Good Morning From Arrow";
output = greetArrow();
console.log(output);
document.getElementById('display').innerHTML = output;

// Normal Function 2
let greetMe = function(name) {
  return `Good Morning ${name}`;
};

output = greetMe('Naveen');
console.log(output);
document.getElementById('display').innerHTML = output;

// Arrow Function
let greetMeArrow = (name) => `Good Afternoon ${name}`;
output = greetMeArrow('John');
console.log(output);
document.getElementById('display').innerHTML = output;

// Normal Function 3
let sum = function(a,b) {
  return a + b;
};

output = `The Sum of a , b is : ${sum(10,20)}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// Arrow Function
let sumArrow = (a , b) => a + b;
output = `The Sum of a , b is : ${sumArrow(10,20)}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// Normal Function 4
let myArray:Array<string> = ['HTML','CSS','JavaScript'];
let arrLength = function (myArray) {
    return myArray.length;
};

output = `Length of myArray is : ${arrLength(myArray)}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// Arrow Function
let arrLengthArrow = (a) => a.length;
output = `Length of the Array is : ${arrLengthArrow(myArray)}`;
console.log(output);
document.getElementById('display').innerHTML = output;


// Normal Function 5
let movies = ['Baahubali' , 'Dangal' , 'Drushyam'];

let movieLength = movies.map(function (movie) {
        return movie.length;
    }
);
output = `The Output is : ${movieLength}`;
console.log(movieLength);
document.getElementById('display').innerHTML = output;

// Arrow Function
let movieLengthArrow = movies.map(movie => movie.length);
output = `The Arrow Function Output is ${movieLengthArrow}`;
console.log(movieLength);
document.getElementById('display').innerHTML = output;