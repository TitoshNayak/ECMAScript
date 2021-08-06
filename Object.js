//JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

//syntax
/*
let student = {
    name:'nayak',
    class:10,
    roll:102

};
console.log(typeof student.class);

console.log(typeof student.name);

console.log(typeof student.roll);



//                 You can also define an object in a single line.

//const person = { name: 'John', age: 20 };


const person = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person["name"]); // John 





//JavaScript Nested Objects
//An object can also contain another object. For example,

const student = {
    name:'John',
    age: 30,
    marks:{
        science:70,
        math:75
    }
}
console.log(student.marks);
console.log(student.marks.science);

*/

const person = {
    name: 'sam',
    age: 30,
    greet: function()
    {
        console.log('hello');
    }
}

person.greet();