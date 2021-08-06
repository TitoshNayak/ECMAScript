 /*Prototype Inheritance
In JavaScript, a prototype can be used to add properties and methods to a constructor function. And objects inherit properties
 and methods from a prototype. For example,
 
 function Person(){
     this.name= 'John',  //create constractors
     this.age= 30

 }

 const person1= new Person();    // create objects
 const person2= new Person();

                              //add property to constractor function
 Person.prototype.gender='male';

 console.log(Person.prototype.gender);

 console.log(person1.gender);

 //Note: The syntax to add the property to an object constructor function is:

      //objectConstructorName.prototype.key = 'value';

      */


        /*
         Add method to the constractor function 
        

         function Person(){
             this.name= 'Maloti',
             this.age = 20
         }

         const person1 = new Person();
         const person2 = new Person ();

         Person.prototype.gender = function(){
             console.log(`hello`+''+''+this.name);
         }

         person1.gender();

         */


        // Changing Prototype
/*
If a prototype value is changed, 
then all the new objects will have the changed property value. All the previously created objects will have the previous value. For example,
*/

function Person(){
    this.name= 'Hassina'
    
}

Person.prototype.age=30;

const person1= new Person();


console.log(person1.age);

//change the new object

Person.prototype={age:50}

const person3 = new Person();

console.log(person1.age);
console.log(person3.age);
