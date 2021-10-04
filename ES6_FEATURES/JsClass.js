/*
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  // creating an object
  const person1 = new Person('John');
  const person2 = new Person('Jack');
  
  console.log(person1.name); // John
  console.log(person2.name); // Jack

  class Emp {
      constractor(name)
  }
  
*/
/*
function Person (){
  this.name ='john',
  this.age = 45
}
                                  //used function to use class
const person1 = new Person();

console.log(person1.name);
console.log(person1.age);

*/
// function used
/*
function Person (){
this.name='kanu',
this.age = 77,
this.time= 676
}                                        //used function to use class

const person1 = new Person();

console.log(person1.name);
console.log(person1.age);
console.log(person1.time);

*/

//using the class concept
/*
class Person {
  constructor(name){
  this.name = name;
  }
}

const person1 = new Person ('jamun');
const person2 = new Person ('khelo');

console.log(person1.name);
console.log(person2.name);
*/

                            // Java script class methods in function

        /*
function Person (name){
  //assingning the parameter values to the calling object
  this.name = name;
  //defining method
  this.greet = function(){
     return `${this.name}`;  //or return (this.name);
  }
}

const person1 = new Person('RAMUN');
console.log(person1.name);

*/


                // Java script class methods in class name


                class Person {
                  constructor(name){
                    this.name = name;
                    

                    }
                    greet(){
                      console.log(` Hello ${this.name}`);
                  }
                }

                let person1 = new Person ('jog');

                console.log(person1.name);

                person1.greet();