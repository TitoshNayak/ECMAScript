//In JavaScript, a constructor function is used to create objects. For example,
   // this is a constractor function
/*
function Person ()
{
    this.name= 'john',
    this.age= 30

    this.greet =function()
    {
        console.log('hello');
    }
}
const person1 = new Person();
const person2 = new Person();

console.log(person1.name);
console.log(person2.name);



     //
     function person ()
     {
         this.name='Ram';
         this.age= 10;
     }

     const person1= new person();

     console.log(person1.name);
     console.log(person1.age);
   



     //JavaScript Constructor Function Parameters 

     function Person (person_name, person_age,person_gender)
     {
         this.name= person_name,
         this.age= person_age,
         this.gender= person_gender,
         this.greet=function(){
             return ('Hi' +''+ this.name);
         }
     }

     const person1 =new Person('john', 23,'male');
     const person2 = new Person('lovely' , 32,'female');

  console.log(person1.name);
  console.log(person2.name);
  
  // Example:

  function Contact(contact_name,contact_location,contact_code){
      this.name=contact_name,
      this.location=contact_location,
      this.code=contact_code,
      this.greet = function(){
          console.log('welcome');
      }
  }
  const contact1= new Contact('Babul','Bangalore', 1);
  const contact2= new Contact('Ashis',' chennai',2);

  console.log(contact1.name);
  console.log(contact2.location);



    //JavaScript Object Prototype
  //You can also add properties and methods to a constructor
 //function using a prototype. For example,


 function Person ()
     {
         this.name='john',
         this.age=30
     }
 
     let person1= new Person();
     let person2= new Person();

     Person.prototype.gender= 'male';

    console.log(person1.name);
     console.log(person2.age);
     console.log(person1.gender);

   //// JavaScript Built-in Constructors
JavaScript also has built-in constructors. Some of them are:

let a = new Object();    // A new Object object
let b = new String();    // A new String object
let c = new Number();    // A new Number object
let d = new Boolean();   // A new Boolean object


*/

//const Name=new String('john');
//console.log( Name);


let number=new Number (34);
console.log(number);













