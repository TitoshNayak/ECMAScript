/**
 * JavaScript Class Inheritance
In this tutorial, you will learn about JavaScript class inheritance with the help of examples.

Class Inheritance
Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more.

Using class inheritance, a class can inherit all the methods and properties of another class.

Inheritance is a useful feature that allows code reusability.

To use class inheritance, you use the extends keyword. For example,
 */

// parents class 
/*
 class Student{
     constructor(name){
         this.name = name;
     }
         
      greet(){
          console.log(`Hello ${this.name}`);
      }
    }

    class Person extends Student{

    }

    let person1 = new Person('done well person');

    person1.greet();

    */

    ///////////////////////////////////////
    //JavaScript super() keyword
//The super keyword used inside a child class denotes its parent class.
// For example,
/*
   class Person{
       constructor(name){
           this.name=name;
       }
       greet(){
           console.log(`Hello ${this.name}`);
       }
   }

   class Student extends Person{
       constructor(name){

        super(name);
       }
   }

   let student1 = new Student('titosh');
   student1.greet();

   */


  //////////////////////////////////////////////////////////////////////////////////
   
   

  /**
    * Overriding Method or Property
If a child class has the same method or property name as that of the parent class, it will use the method and property of the child class.
 This concept is called method overriding. For example,
    */

class Person{
    constructor(name){
        this.name= name;
        this.occupation = "unemployed";
    }

    greet(){
        console.log(`Hello ${this.name}` );
    }
}

class Student extends Person{
    constructor(name){


        super(name);

        this.occupation= 'student';
    }
    greet(){
        console.log(` Hello student ${this.name}`);
        console.log('occupation:' + this.occupation);
    }
}

let p = new Student('jacku');
p.greet();









