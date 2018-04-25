// Create a Student Interface , and printStudent function
function printStudent(student) {
    var output = "Name : " + student.name + " \n                    Age : " + student.age + "\n                    Course : " + student.course + " \n                    City : " + student.address.city + " \n                    State : " + student.address.state + " \n                    Country : " + student.address.country;
    console.log(output);
    document.getElementById('display').innerHTML = output;
}
var student1 = {
    name: 'Rajan',
    age: 23,
    course: 'Engineering',
    address: {
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India'
    }
};
printStudent(student1);
