/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative.
 In this we use ` (back tick).

*/
// String Concatenation Operator
var employee = {
    name: 'John',
    age: 40,
    designation: 'Manager'
};
var stringConcat = "<div style='background-color:yellow;padding: 10px'>"
    + "<h3>" + employee.name + "</h3>" +
    "<h3>" + employee.age + "</h3>" +
    "<h3>" + employee.designation + "</h3>" +
    "</div>";
document.getElementById('container').innerHTML = stringConcat;
//Template String
var templateStr = "<div style=\"background-color: orange;padding: 10px;\"> \n                        <h3>" + employee.name + "</h3>\n                        <h3>" + employee.age + "</h3>\n                        <h3>" + employee.designation + "</h3>\n                    </div>";
document.getElementById('container').innerHTML = templateStr;
