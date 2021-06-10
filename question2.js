//We can create a js object by creating: 
//1.A single object then giving it properties and values.
var car = {
    color: "Brown",
    make: "Subaru",
    model: "Forester"
}


//2/Use object.create() function.
//3.create an object with the keyword 'new' with object constructor function example.
const car = new Object()



//4.By using a defined constructor
function names(first, last) {
    this.firstName = first;
    this.lastName = last;
}

//5.use a class to create an object.
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("M", "M")

//6.Use object.create() function.