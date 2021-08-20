/**
 *  JAVA SCRIPT MAP
 * 
 * Map is similar to objects in JavaScript that allows us to store elements in a key/value pair.

The elements in a Map are inserted in an insertion order. However, unlike an object, a map can contain objects, functions and other data types as key.


 */

/**
 * JavaScript Map vs Object
Map	                                                                                                         Object
Maps can contain objects and other data types as keys.            	                            Objects can only contain strings and symbols as keys.
Maps can be directly iterated and their value can be accessed.                             	    Objects can be iterated by accessing its keys.
The number of elements of a Map can be determined by size property.	                            The number of elements of an object needs to be determined manually.
Map performs better for programs that require the addition or removal of elements frequently.	  Object does not perform well if the program requires the addition or removal of elements frequently.

 */
/**
 * Create JavaScript Map
To create a Map, we use the new Map() constructor. For example,
 */
/*
const map4 = new Map(); // an empty map
console.log(map4);

let map2= new Map();
console.log(map2);
*/
/*
let map1 = new Map();
 //insert the value pair
 map1.set('info',{name: 'Jack', age:26});
 console.log(map1);
 */
 /**
  * You can also use objects or functions as keys. For example,


  */
 /** 
  * let map2 = new Map();
 let obj = {};
 map2.set(obj, {name: 'Nayak', age :"77"});
 console.log(map2);
 */
 /**
  * Access Map Elements
You can access Map elements using the get() method. For example,
  */

/*

let map1 = new Map();
map1.set('info', {name: 'Jack', age: 66});

// access the elements of a Map
console.log(map1.get('info')); // {name: "Jack", age: "26"}


let map7 = new Map();
map7.set('obj',{name : 'bhala', age : 66});
console.log(map7.get('obj'));

*/

/**
 * Check Map Elements
You can use the has() method to check if the
 element is in a Map. For example,
 */

/*
 const set1 = new Set([1,2,3]);
 let map1 = new Map();
 map1.set('info',{name:'bhai' , age : 45});

 console.log(map1.has('info'));

 */

 /**
  * Removing Elements
You can use the clear() and the delete() method to remove elements from a Map.

The delete() method returns true if a specified key/value pair exists and 
has been removed or else returns false. For example,
  */
/*
let map1 = new Map();
map1.set('obj' , {name : 'Jack',age : 33});
//remove elements
map1.delete('address');
console.log(map1);

map1.delete('obj');
console.log(map1);
*/
//The clear() method removes all key/value
 //pairs from a Map object. For example,
/*
let map1 = new Map();
map1.set('info',{name : 'myname', age : 22});

//remove all element
map1.clear();
console.log(map1);

*/
/**
 * JavaScript Map Size
You can get the number of elements 
in a Map using the size property. For example,
 */
/*

let map2 = new Map();
let map1 = new Map();
map1.set('info', {name : 'Jack', age : 55});
map2.set('infoo', {name : 'Jack1', age : 551});
console.log(map2.size);
console.log(map1.size);
*/

/**
 * Iterate Through a Map
You can iterate through the Map elements using the for...of loop or forEach() method. The elements 
are accessed in the insertion order. For example,
 */
 

//for in () loop
/*
 let map1 = new Map();
 map1.set('name','jack');
 map1.set('age', '37');

  //looping througn map
    for(let [key,value] of map1){
        console.log(key + '=' + value);
    }
*/

// using for each()

// using forEach method()
/*
let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through Map
map1.forEach(function(value, key) {
  console.log(key + '- ' + value)
})

*/
/*
let map1 = new Map();
//let obj = {};
map1.set('info', {name : 'hello', age : 56});
//map1.delete('info');
//map1.clear();
console.log(map1.size);

*/
/*
//Iterate Through a Map
let map1 = new Map();
map1.set('name' , 'hello');
map1.set('áge' , '55');
     // for of loop
for( let [key,value] of map1){
  console.log(key + '='+ value);
}

*/

// using the forEach() loop
/*
let map1 = new Map();
map1.set('name', 'hello');
map1.set('age' , '88');

map1.forEach(function(value,key)
{
  console.log(key + '='+ value)
})



let map1 = new Map();
map1.set('my', 'name');
map1.set('num', '9');

map1.forEach(function(value, key)
{
  console.log(key + '='+ value)
})

*/

/**
 * Iterate Over Map Keys
You can iterate over the Map and
 get the key using the keys() method. For example,
 

 let map1 = new Map();
 map1.set('name' , 'hello' );
 map1.set('age' , '6');

 for( let key of map1.keys()){
   console.log(key);
 }
 */

 /**
 * Iterate Over Map Keys
You can iterate over the Map and
 get the key using the values() method. For example,
 

 let map1 = new Map();
 map1.set('name' , 'hello' );
 map1.set('age' , '6');

 for( let value of map1.values()){
   console.log(value);
 }
 */

 /**
  * Get Key/Values of Map
You can iterate over the Map and get the key/value of
 a Map using the entries() method. For example,
  */

 let map1 = new Map();
 map1.set('name' , ' hello');
 map1.set('age', '78');

 for(let elem of map1.entries()){
   console.log(`${elem[0]}:${elem[1]}`);
 }