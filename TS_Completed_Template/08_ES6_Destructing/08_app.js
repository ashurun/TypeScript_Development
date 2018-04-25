/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
//Before ES6
var array = [10001, 'naveen', 'TechLead'];
var id = array[0];
var myName = array[1];
var designation = array[2];
// After ES6 using Destructing
var myArray = ['John', 40, 'Manager'];
var empName = myArray[0], age = myArray[1], desg = myArray[2];
var output = "Employee Name : " + empName + " Age: " + age + " Designation : " + desg;
console.log(output);
document.getElementById('display').innerHTML = output;
// Best usage is to exchange the value btw a & b
var a = 10;
var b = 20;
_a = [b, a], a = _a[0], b = _a[1];
output = "a: " + a + " , b: " + b;
console.log(output);
document.getElementById('display').innerHTML = output;
// This is even works for Objects
var student = {
    studentName: 'John',
    studentAge: 25,
    studentCourse: 'Engineering'
};
var stdName = student.studentName, stdAge = student.studentAge, stdCourse = student.studentCourse;
output = "Name : " + stdName + " Age : " + stdAge + " Course : " + stdCourse;
console.log(output);
document.getElementById('display').innerHTML = output;
var _a;
