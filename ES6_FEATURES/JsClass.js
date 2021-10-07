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

                //Note: The constructor() method inside a class gets called automatically each time an object is created.

/*
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

                */   
               /*

                class Person {
                  constructor(name){
                    this.name = 'john'
          
                  }

                  greet(){
                    console.log(`${this.name}`)
                  }
                }

                const person1 = new Person();

                person1.greet();
        ////////Below is used the function



                function Nayak(){
                  this.name = 'jammu',
                  this.age= 45
                }

                const nayak1 = new Nayak();

                console.log(nayak1.name);
                console.log(nayak1.age);

*/
/**
 * Getters and Setters
In JavaScript, getter methods get the value of an object and setter methods set the value of an object.

JavaScript classes may include getters and setters. You use the get keyword for getter methods and set for setter methods. 
For example,
*/
/*

class Person{
  constructor(name){
    this.name= name;
  }
  //getter 
   get PersonName(){
     return this.name;
   }

   //setter
   set PersonName(x){
     this.name = x;

   }
}

let person1 = new Person('Jacku');
console.log(person1.name);
   // changing the vvalue of name property
person1.PersonName='Ruth';
console.log(person1.name);

*/

                   //getter and setter


     class Person{
       constructor(name){
         this.name='name'
       }

      get PersonName(){
       return this.name;
      }
     
   

      set PersonName(x){
        this.name=x;
      }

     }
     
let person1 = new Person('James nao');
console.log(person1.name);
   // changing the vvalue of name property
person1.PersonName='Ruth';
console.log(person1.name);

    



       /////Note: JavaScript class is a special type of function. And the typeof operator returns function for a class.

       //example

       //class Person {}
        // console.log(typeof Person);

