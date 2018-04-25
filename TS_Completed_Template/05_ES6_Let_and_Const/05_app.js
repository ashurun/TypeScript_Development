/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/
// 'var' usage
for (var i = 0; i <= 10; i++) {
    var empName = "John";
}
var output = "The value of empName outside for loop is : " + empName;
// here we can access the 'empName' value even outside for loop using 'var' keyword
console.log(output);
document.getElementById('container').innerHTML = "<h1>" + output + "</h1>";
// 'let' usage
for (var i_1 = 0; i_1 <= 10; i_1++) {
    var empName1 = "John";
    console.log(i_1); // we can access here using 'let'
}
// We cannot access empName1 outside for loop using 'let'
console.log(empName1);
