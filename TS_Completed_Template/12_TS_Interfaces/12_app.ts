// Create a Student Interface , and printStudent function

interface Student{
    name : string,
    age : number,
    course : string,
    address : {
        city : string,
        state : string,
        country : string
    }
}

function printStudent(student:Student){
    let output =   `Name : ${student.name} 
                    Age : ${student.age}
                    Course : ${student.course} 
                    City : ${student.address.city} 
                    State : ${student.address.state} 
                    Country : ${student.address.country}`;
    console.log(output);
    document.getElementById('display').innerHTML = output;
}

let student1:Student = {
  name : 'Rajan',
  age : 23,
  course : 'Engineering',
  address : {
     city : 'Hyderabad',
     state : 'Telangana',
     country : 'India'
   }
};

printStudent(student1);



