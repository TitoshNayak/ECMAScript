/**
 * avaScript WeakMap
The WeakMap is similar to a Map. 
However, WeakMap can only contain objects as keys. For example,
 */
/*
const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {} 

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello');

console.log(weakMap); // WeakMap {{} => "hello"}
*/

/**
 * WeakMap Methods
WeakMaps have methods get(), 
set(), delete(), and has(). For example,
 */

const weakMap = new WeakMap();
//console.log(weakMap);
let obj = {};
weakMap.set(obj, ' hello');
//console.log(weakMap);

console.log(weakMap.get(obj));

console.log(weakMap.has(obj));
console.log(weakMap.delete(obj));
console.log(weakMap);

/**
 * WeakMaps Are Not iterable
Unlike Maps, WeakMaps are not iterable. For example,


 */
/*
const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {} 

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello');


// looping through WeakMap
for (let i of weakMap) {

    console.log(i);  // TypeError
}
*/