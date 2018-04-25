/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

//For...in Loop from ES-5 version

let myArray:Array<string> = ['html','javascript','css','bootstrap'];
let output:string = "";
for(let index in myArray){
    let value:string = myArray[index];
    output += `${value} `;
}
console.log(output);
document.getElementById('container').innerHTML = `<h1>${output}</h1>`;


// For...of loop from ES-6 version
let languages:Array<string> = ['html','javascript','css','bootstrap'];
output = "";
for(let value of languages){
    output += `${value} `;
}
console.log(output);
document.getElementById('container').innerHTML
    = `<h1 style="color: red">${output}</h1>`;
