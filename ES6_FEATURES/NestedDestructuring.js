/**
 * Nested Destructuring Assignment
You can perform nested destructuring for array elements. For example,
 */
//nested array

/*
 const arrValue = ['one ', ['two', 'three']];

 const [x,[y,z]] = arrValue;

 console.log(x);
 console.log(y);
 console.log(z);

 */
////////////////////////////////////////////////////////////////
                 //nested object destructuring 

const person = {
    name : 'myname',
    age : 54,
    hobbies:{
        read : true,
        write : true
    }
}

let {name,age,hobbies:{read,write}}=person;

console.log(name);
console.log(age);
console.log(read);
console.log(write);