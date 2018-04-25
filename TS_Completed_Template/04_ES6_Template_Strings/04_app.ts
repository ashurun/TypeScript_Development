/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative.
 In this we use ` (back tick).

*/


// String Concatenation Operator
let employee = {
    name : 'John',
    age : 40,
    designation : 'Manager'
};

let stringConcat =  "<div style='background-color:yellow;padding: 10px'>"
                    + "<h3>" + employee.name + "</h3>" +
                    "<h3>" + employee.age + "</h3>" +
                    "<h3>" + employee.designation + "</h3>" +
                    "</div>";
document.getElementById('container').innerHTML = stringConcat;

//Template String

let templateStr = `<div style="background-color: orange;padding: 10px;"> 
                        <h3>${employee.name}</h3>
                        <h3>${employee.age}</h3>
                        <h3>${employee.designation}</h3>
                    </div>`;

document.getElementById('container').innerHTML = templateStr;


