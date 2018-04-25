/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
function greet(name, age) {
    if (name === void 0) { name = 'Williams'; }
    if (age === void 0) { age = 35; }
    var output = "Hello " + name + " You are " + age + " yrs Old!";
    console.log(output);
    document.getElementById('display').innerHTML = output;
}
greet();
