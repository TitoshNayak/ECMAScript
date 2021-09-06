/**
 * Array Destructuring
You can also perform array destructuring in a similar way. For example,
 */

// Exmaple
/*
const arrValue = ['one', 'two', 'three'];

const [x,y,z]= arrValue;

console.log(x);
console.log(y);
console.log(z);
*/
//////////////////default value in array destructuring

/*
let arrValue = [10];

// assigning default value 5 and 7
let [x = 5,  y = 7] = arrValue;

console.log(x); // 10
console.log(y); // 7
*/



//////////////////////////////////////
                     //swapping the variables
/*
let x=8;
let y = 7;

[x,y] = [y,x];

console.log(x);
console.log(y);
*/
////
/*
let arrValue =['one', 'two', 'three'];

let [, y, z]= arrValue;

console.log(y);
console.log(z);

*/

let arrValue = ['one', 'two', 'three', 'four'];

let [x , ...y] = arrValue;

console.log(x);
console.log(y);


//////////////////////////////////////////////////

let person = {
    name : 'helo',
    age : 45, 
    gender : 'male'
}

let {name, ...rest}=person;

console.log(name);
console.log(rest);