/*JavaScript Getter and Setter
In this tutorial, you will learn about JavaScript getter and setter methods with the help of examples.

In JavaScript, there are two kinds of object properties:

Data properties
Accessor properties


//Data Property

let student={
    firstname:'Nayak'
};

console.log(student.firstname);


JavaScript Getter
In JavaScript, getter methods are used to access the properties of
 an object. For example,

 

const student= {
    firstName: 'Radha',
    get getName(){
        return this.firstName;
    }
};

console.log(student.firstName);
console.log(student.getName);



//JavaScript Setter
In JavaScript, setter methods are used to change the
 values of an object. For example,

 */

 let student= {
     firstName: 'Damu',
     set changeName(newName){
         this.firstName=newName;

     }
 };
console.log(student.firstName);


student.changeName = 'Sarha';
console.log(student.firstName);