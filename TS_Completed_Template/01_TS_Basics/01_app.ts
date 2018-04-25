

// Hello World App

let output:string = "Hello TypeScript";
console.log(output);
document.getElementById('display').innerHTML = output;

/*

DataTypes in TypeScript

1.Boolean
2.Number
3.String
4.array[]
5.any

 */

// Boolean

let isTSEasy:boolean = true;
console.log(isTSEasy);
document.getElementById('display').innerHTML = isTSEasy + "";

// Number

let num1:number = 10;
output = "The value of num1 is : " + num1;
console.log(output);
document.getElementById('display').innerHTML = output;


// String

let myName:string = "Naveen";
output = "My name is : " + myName;
console.log(output);
document.getElementById('display').innerHTML = output;

// array[]

let myArray:Array<string> = ['html','css','javascript'];
output = "The Array values are : " + myArray.join('-');
console.log(output);
document.getElementById('display').innerHTML = output;

// any
let a :any = 10;
console.log(a);