// link : https://www.programiz.com/javascript/set-weakset


/**
 * JavaScript WeakSet
The WeakSet is similar to a Set. However, 
WeakSet can only contain objects whereas a Set can contain any data types such as strings, numbers, objects, etc. For example,
 
const weakSet = new WeakSet();
console.log(weakSet); // WeakSet {}

let obj = {
    message: 'Hi',
    sendMessage: true
}

// adding object (element) to WeakSet
weakSet.add(obj);

console.log(weakSet); // WeakSet {{message: "Hi", sendMessage: true}}

*/

//////////////////////////////////////////////////////////////
/*
                  WeakSet Methods
WeakSets have methods add(), delete(), and has(). For example,
*/
/*

const weakSet = new WeakSet();
console.log(weakSet);

const obj = {a:1};
weakSet.add(obj);
console.log(weakSet);
// check if an element is in Set
console.log(weakSet.has(obj)); // true

// delete elements
weakSet.delete(obj);
console.log(weakSet); // WeakSet {}

*/
/////////////////////////////


function union(a,b)
{
    let unionSet = new Set(a);
    for( let i of b)
    {
         unionSet.add(i);
    }
    return unionSet
}

let setA = new Set (['apple', 'mango', 'orange']);
let setB = new Set(['grapes', 'apple', 'banana']);

let result =union(setA , setB);

console.log(result);