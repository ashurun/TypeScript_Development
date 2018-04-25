// Create a simple function to add two numbers
function add(a, b) {
    var sum = a + b;
    return sum;
}
var output = "The Addition of a , b is " + add(10, 20);
console.log(output);
document.getElementById('display').innerHTML = output;
// Create the same add function with first number as 'any' type
function addAny(a, b) {
    var aVal = 0;
    if (typeof a === 'string') {
        if (isNaN(parseInt(a, 10))) {
            aVal = 0;
        }
        else {
            aVal = parseInt(a, 10);
        }
    }
    else {
        aVal = 0;
    }
    var sum = aVal + b;
    return sum;
}
output = "The Sum is : " + addAny('10', 20);
console.log(output);
document.getElementById('display').innerHTML = output;
function findMax(a, b, c) {
    if (b === undefined && c === undefined) {
        return a;
    }
    else if (c === undefined) {
        return Math.max(a, b);
    }
    else {
        return Math.max(a, b, c);
    }
}
output = "The Biggest value is : " + findMax(10);
output = "The Biggest value is : " + findMax(10, 20);
output = "The Biggest value is : " + findMax(10, 20, 30);
//Not Possible for 4 arguments
//output = `The Biggest value is : ${findMax(10,20,30,40)}`;
console.log(output);
document.getElementById('display').innerHTML = output;
// Function Overloading in TypeScript , findMin using Math
// Create an Employee function and get an Employee Object
function createEmployee(name, age, desg, address) {
    var emp = {
        name: name,
        age: age,
        desg: desg,
        address: address
    };
    return emp;
}
var employee = createEmployee('John', 40, 'Manager', 'UK');
output = employee.name + " " + employee.age + " " + employee.desg + " " + employee.address;
console.log(output);
document.getElementById('display').innerHTML = output;
