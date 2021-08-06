
/*
let person={
    name: 'Ram',
    age: 40,
    location: function ()
    {
        console.log('Bangalore');
    }
};

person.location();
*/
               //JavaScript this Keyword
//To access a property of an object from within a method of the same object, you need to
 //use the this keyword. Let's consider an example.

 const person ={
     name: 'john',
     age: 40,
     greet:function(){console.log(`the name is `+''+ this.name);}
 };
 person.greet();


          //example
 const person = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

person.greet();