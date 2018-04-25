/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/

function greet(name:string='Williams',age:number=35):void{
    let output:string = "Hello " + name + " You are " + age + " yrs Old!";
    console.log(output);
    document.getElementById('display').innerHTML = output;
}

greet();


