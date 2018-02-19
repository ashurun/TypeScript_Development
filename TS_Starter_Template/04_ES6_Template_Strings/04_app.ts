/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative.
 In this we use ` (back tick).

*/


// Starter

let employee = {
    id:1001,
    name:"Naveen",
    designation:"Technical Tead"
};

let displayName =  "Meet Mr ." + employee.name;

var output  = "<h1 id='display'>" + displayName + "</h1>"; // String concatenation

// Template String
output = `<h1 id="display"> ${employee.name} </h1> <span>This is some</span>`;

document.getElementById('container').innerHTML = output;
console.log(displayName);


