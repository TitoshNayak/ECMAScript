/**
 * JavaScript Spread Operator
In this tutorial, you will learn about JavaScript spread operator with the help of examples.

The spread operator is a new addition to the features available in the JavaScript ES6 version.


 */

//const value = ['my ',' name' , 'is' , 'Jack' ] ;
//console.log(value);
//console.log(...value);

//copy array using spread operator

const x = ['one' , 'two'];
const y = [...x, 'three', 'four', 'five'];
console.log(y);


const result = {x :3, y : 8};
const value = {z : 7};

const final = {...result, ...value};
console.log(final);