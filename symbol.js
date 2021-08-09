/*
JavaScript Symbol
The JavaScript ES6 introduced a new primitive data type called Symbol. Symbols are immutable (cannot be changed) and are unique. For example,

// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false
//////////////////

const valid1 = Symbol('hello');
const valid2 = Symbol('hello');

console.log(valid1 === valid2);
*/

 // creating  symbols

 //const x= Symbol()

//typeof x;

//////////////////

// How to access the symbols 
/*
const x=  Symbol('65');
  console.log(x.description);

  ///////////////

  //Add Symbol as an Object Key
You can add symbols as a key in an object using square brackets []. 
For example,



const id = Symbol('id');

let person = {
    [id]:32,

    name: 'jack'
};

console.log(person);



let id = Symbol("id");

let person = {
   
    name: 'Monali',
    age:45,
    [id]:90
};


for (let key in person){
    console.log(key);
 
}



let person= {
    name: 'rahul',
    age:24
};

let id = Symbol("id");

person[id] = "Another value";

console.log(person[id]);

*/

////////////////////////


/**
 * 
 * Symbol Methods
There are various methods available with Symbol.

Method	Description
for()	Searches for existing symbols
keyFor()	Returns a shared symbol key from the global symbol registry.
toSource()	Returns a string containing the source of the Symbol object
toString()	Returns a string containing the description of the Symbol
valueOf()	Returns the primitive value of the Symbol object.

 
//Example: Symbol Methods
// get symbol by name
let sym = Symbol.for('hello');
let sym1 = Symbol.for('id');

// get name by symbol
console.log( Symbol.keyFor(sym) ); // hello
console.log( Symbol.keyFor(sym1) ); // id

*/

/**
 * 
 * Symbol Properties
Properties	Description
asyncIterator	Returns the default AsyncIterator for an object
hasInstance	Determines if a constructor object recognizes an object as its instance
isConcatSpreadable	Indicates if an object should be flattened to its array elements
iterator	Returns the default iterator for an object
match	Matches against a string
matchAll	Returns an iterator that yields matches of the regular expression against a string
replace	Replaces matched substrings of a string
search	Returns the index within a string that matches the regular expression
split	Splits a string at the indices that match a regular expression
species	Creates derived objects
toPrimitive	Converts an object to a primitive value
toStringTag	Gives the default description of an object
description	Returns a string containing the description of the symbol
Example: Symbol Properties Example
const x = Symbol('hey');

// description property
console.log(x.description); // hey

const stringArray = ['a', 'b', 'c'];
const numberArray = [1, 2, 3];

// isConcatSpreadable property
numberArray[Symbol.isConcatSpreadable] = false;

let result = stringArray.concat(numberArray);
console.log(result); // ["a", "b", "c", [1, 2, 3]]
Previous Tutorial:
JS Numbers
N
 */