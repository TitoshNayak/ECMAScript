/**
 * JavaScript Classes
JavaScript class is used to create an object. Class is similar to a constructor function. For example,


 
////////////
class Person {
    constructor(name){
      this.name= 'Nayak';
    }


}

const person1 = new Person();
console.log(person1.name);



//constructor function
class Person{
    constructor(){
    this.name= 'ram',
    this.age= 34

}
}
 
let x = new Person();
console.log(x.age);
console.log(x.name);

*/

/**
 * 
 */
//Javascript Class Methods
class Person{
    constructor(){
        this.name= 'hello',
        this.age = 34
       this.result= function(){
           console.log(` welocome ${this.name}`);
       }
    }
}

const x = new Person();
console.log(x.name);