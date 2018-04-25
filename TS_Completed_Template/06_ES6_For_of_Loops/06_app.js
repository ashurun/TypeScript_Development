/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/
//For...in Loop from ES-5 version
var myArray = ['html', 'javascript', 'css', 'bootstrap'];
var output = "";
for (var index in myArray) {
    var value = myArray[index];
    output += value + " ";
}
console.log(output);
document.getElementById('container').innerHTML = "<h1>" + output + "</h1>";
// For...of loop from ES-6 version
var languages = ['html', 'javascript', 'css', 'bootstrap'];
output = "";
for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
    var value = languages_1[_i];
    output += value + " ";
}
console.log(output);
document.getElementById('container').innerHTML = "<h1 style=\"color: red\">" + output + "</h1>";
