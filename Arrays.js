/*
  JavaScript Array
In this tutorial, you will learn about JavaScript array with the help of examples.

An array is an object that can store multiple elements. For example,

const myArray = ['hello', 'world', 'welcome'];

////////

   Array Methods
In JavaScript, there are various array methods available that makes it easier to perform useful calculations.

Some of the commonly used JavaScript array methods are:

Method	Description
concat()	joins two or more arrays and returns a result
indexOf()	searches an element of an array and returns its position
find()	returns the first value of an array element that passes a test
findIndex()	returns the first index of an array element that passes a test
forEach()	calls a function for each element
includes()	checks if an array contains a specified element
push()	aads a new element to the end of an array and returns the new length of an array
unshift()	adds a new element to the beginning of an array and returns the new length of an array
pop()	removes the last element of an array and returns the removed element
shift()	removes the first element of an array and returns the removed element
sort()	sorts the elements alphabetically in strings and in ascending order
slice()	selects the part of an array and returns the new array
splice()	removes or replaces existing elements and/or adds new elements





Create an Array
You can create an array using two ways:

1. Using an array literal
    let array1 = ['eat', 'sleep'];

2. Using the new keyword    

 let Array2 = new Array('eat', 'sleep');



//Emppty Array
  let myarray1= [];

  //Array of numbers

  let numberArray = [1,2,3,4,5];

  // string array

  let StringArray = ['hello', 'welcome'];

///

let newData = [
    {'task1': 'exercise'},
    [1,2,3],
function hello()
{
    console.log('hello');
}

];
///


// How t0 access the array object
let myArray = ['h','e','l','l','o'];

//first element
console.log(myArray[0]);
console.log(myArray[1]);

console.log(myArray[2]);
console.log(myArray[3]);

*/
////

// add a element to an array
//The unshift() method adds an element at 
//the beginning of the array. For example,
/*
let dailyActivities = ['eat', 'sleep', 'dance'];
//add an element to start
dailyActivities.unshift('work');  //add an element to the existing element at first place
dailyActivities.push('play');                      
dailyActivities.unshift('exercises');      
console.log(dailyActivities);


////
let x = ['hello','bye', 'hey'];

x[3]='stop';

console.log(x);


////

let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities.pop();
console.log(dailyActivities); // ['work', 'eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities);  // ['work', 'eat']



      //Array Length

      let x = ['he','she','me'];

      console.log(x.length-1);
*/

     //Example: JavaScript Array Methods

let x = ['work', 'exercise', 'sleep'];
let newRoutine = ['eat'];

//x.sort();             //sort method used
//console.log(x);


//let position = x.indexOf('sleep');
//console.log(position);          // indexOf method used

//let newx= x.slice(1);             //slice method used
//console.log(newx);

let routine = x.concat(newRoutine);
console.log(routine);