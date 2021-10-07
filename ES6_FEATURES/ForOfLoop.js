/**
 * JavaScript for... of Loop
In this tutorial, you will learn about JavaScript for...of loop with the help of examples.

In JavaScript, there are three ways we can use a for loop.

JavaScript for loop
JavaScript for...in loop
JavaScript for...of loop
The for...of loop was introduced in the later versions of JavaScript ES6.

The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).


     JavaScript for...of loop
The syntax of the for...of loop is:

    for(element of iterable){
        //body of for...of
    }

    Here,

iterable - an iterable object (array, set, strings, etc).
element - items in the iterable
 */
///////////////////////////////////////////////////////////////////////

                 //for...of with Arrays
   
   /*              // array 
   
   const students=['john','sara','kite'];

   //using for..of

   for(element of students){
       console.log(element);
   }
*/                
                      // for...of with Strings
/*
    const string= 'code';

    for(let i of string){
        console.log(i);
    }
    */
                          //for...of with Sets
/*
           const set = new Set([1,2,3]);            

           for(let i of set){
               console.log(i);
           }
           */

                        //for...of with Maps
/*
  let map = new  Map();

  map.set('name','Jogn');
  map.set('age','66');

  for(let [key,value] of map){
      console.log(key +'-'+ value);
  }
  */

  //////////////////////////////////////////////////
  /**
   * User Defined Iterators
You can create an iterator manually and use the for...of loop to iterate through the iterators.
 For example,
   */
  /*
  // creating iterable object
const iterableObj = {

    // iterator method
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) {
                    return { value: '1', done: false};
                 }
                else if (step === 2) {
                    return { value: '2', done: false};
                }
                else if (step === 3) {
                    return { value: '3', done: false};
                }
                return { value: '', done: true };
            }
        }
    }
}

// iterating using for...of
for (const i of iterableObj) {
 console.log(i);
}

*/ 
 ///////////////////////////////////////////////////////////////////////////
                            //User Defined Iterators
//You can create an iterator manually and use the for...of loop to iterate through the iterators.
 //For example,

 //generator function
 function* generatorFunc(){
     yield 10;
     yield 20;
     yield 30;
 }

 const obj = generatorFunc();

    //iteration through generator

    for(let value of obj){
        console.log(value);
    }