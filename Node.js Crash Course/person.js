class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`Name is ${this.name} and I am ${this.age}`);
    }
}
module.exports = Person;