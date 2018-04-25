/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

//Before ES6

let array = [10001,'naveen','TechLead'];
let id = array[0];
let myName = array[1];
let designation = array[2];


// After ES6 using Destructing
let myArray = ['John',40,'Manager'];
let [empName , age , desg] = myArray;
let output = `Employee Name : ${empName} Age: ${age} Designation : ${desg}`;
console.log(output);
document.getElementById('display').innerHTML = output;


// Best usage is to exchange the value btw a & b
let a:number = 10;
let b:number = 20;
[a , b] = [b , a];
output = `a: ${a} , b: ${b}`;
console.log(output);
document.getElementById('display').innerHTML = output;


// This is even works for Objects
let student = {
    studentName: 'John',
    studentAge : 25,
    studentCourse : 'Engineering'
};

let {studentName:stdName , studentAge:stdAge , studentCourse:stdCourse } = student;

output = `Name : ${stdName} Age : ${stdAge} Course : ${stdCourse}`;
console.log(output);
document.getElementById('display').innerHTML = output;

