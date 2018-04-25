// Create a simple function to add two numbers
function add(a:number , b:number):number{
    let sum:number = a + b;
    return sum;
}

let output:string = `The Addition of a , b is ${add(10,20)}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// Create the same add function with first number as 'any' type
function addAny(a:any,b:number):number{
    let aVal = 0;
    if(typeof a === 'string'){
        if(isNaN(parseInt(a,10))){
            aVal = 0;
        }
        else{
            aVal = parseInt(a,10);
        }
    }
    else{
        aVal = 0;
    }
    let sum:number = aVal + b;
    return sum;
}

output = `The Sum is : ${addAny('10',20)}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers
function findMax(a:number):number;
function findMax(a:number,b:number):number;
function findMax(a:number,b:number,c:number):number;
function findMax(a:number,b?:number,c?:number):number{
    if(b === undefined && c === undefined){
        return a;
    }
    else if(c === undefined){
        return Math.max(a,b);
    }
    else{
        return Math.max(a,b,c);
    }
}

output = `The Biggest value is : ${findMax(10)}`;
output = `The Biggest value is : ${findMax(10,20)}`;
output = `The Biggest value is : ${findMax(10,20,30)}`;
//Not Possible for 4 arguments
//output = `The Biggest value is : ${findMax(10,20,30,40)}`;
console.log(output);
document.getElementById('display').innerHTML = output;


// Function Overloading in TypeScript , findMin using Math

// Create an Employee function and get an Employee Object
function createEmployee(name:string,age:number,desg:string,address:string){
    let emp = {
        name : name,
        age : age,
        desg : desg,
        address : address
    };
    return emp;
}

let employee = createEmployee('John',40,'Manager','UK');
output = `${employee.name} ${employee.age} ${employee.desg} ${employee.address}`;
console.log(output);
document.getElementById('display').innerHTML = output;