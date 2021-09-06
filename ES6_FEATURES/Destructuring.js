/**
 * JavaScript Destructuring Assignment
In this tutorial, you will learn about JavaScript destructuring assignment with the help of examples.

JavaScript Destructuring
The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables. For example,

 */

//assigning the object attributes to variables
/*

 const person = {
     name :'Sara',
     age : 34,
     gender : 'male'
    
    }

    let name = person.name;                //before es6 used to follow
    let age = person.age;
    let gender = person.gender;

    console.log(name);
    console.log(age);
    console.log(gender);


    */

 // before es6 

 /*
    const Example = {

        name: 'shiva',
        age : 77,
        gender : 'female'
    }

    let name = Example.name;
    let age = Example.age;
    let gender= Example.gender;

    console.log(name);
    console.log(age);
    console.log(gender);

    */


    //From es6 
/*
    const Example = {

        name: 'sanu',
        age : 76,
        gender : 'female'
    }

let {name,age,gender} = Example;

console.log(name);
    console.log(age);
    console.log(gender);

    */

    /*

    const Company = {

        name: 'Navy',
        age : 65,
        gender : 'male'
    }

    let {name,age,gender }= Company;

    console.log(name);
    console.log(age);
    console.log(gender);
    */
