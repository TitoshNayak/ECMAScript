/**
 * JavaScript CallBack Function
In this tutorial, you will learn about JavaScript callback functions with the help of examples.

A function is a block of code that performs a certain task when called.
 For example,
 */

 // function 
 /*
 function greet(name)
 {
     console.log('Hi' + ' ' + name );
 }

 greet('peter');

 */

 /////////////////////////////////////////////////////
 /**
  * In the above program, a string value is passed as an argument to the greet() function.

In JavaScript, you can also pass a function as an argument to a function. This function that is passed as an argument inside of another function is called a callback function. For example,


  */
/*
//function
function greet(name, callBack){
    console.log('Hello' + ' ' + name);

    callBack();
}

function callBack(){
    console.log('I am called back');

}

greet('mohan',callBack);

*/

/**
 * Benefit of Callback Function
The benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call.

In this example, we are going to use the setTimeout() method to mimic the program that takes time to execute, such as data coming from the server.

Example: Program with setTimeout()
 */

              // program that show the delay in execution

              function greet(){
                  console.log('helloo world');
              }

              function sayName(name){
                  console.log('Hello'+ ' '+ name);
              }

              setTimeout(greet, 2000);
              sayName('john');

              /**
               * Example: Using a Callback Function
In the above example, the second function does not wait for the first function to be complete. However,
 if you want to wait for the result of the previous function call before the next statement is executed, you can use a callback function. For example,

// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);

In the above program, the code is executed synchronously. The sayName() function is passed as an argument to the greet() function.

The setTimeout() method executes the greet() function only after 2 seconds. However, the sayName() function waits for the execution of the greet() function.

Note: The callback function is helpful when you have to wait for a result that takes time. For example, the data coming from a server because it takes time for data to arrive.
               */