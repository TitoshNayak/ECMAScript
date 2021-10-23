/**
 * Javascript setTimeout()
In this tutorial, you will learn about the JavaScript setTimeout() method with the help of examples.

The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

The commonly used syntax of JavaScript setTimeout is:


                   setTimeout(function, millisecond);

                   Its parameters are:

function - a function containing a block of code
milliseconds - the time after which the function is executed
The setTimeout() method returns an intervalID, which is a positive integer.
 */

          //Example 1: Display a Text Once After 3 Second
       /*  
    function greet(){
        console.log('Hello sir');
    }

    setTimeout(greet,3000);
    console.log('this message is shown first');
    */
             
                 /// program to display a text using setTimeout method
                 /*
function greet(){
    console.log('welcome');
}

setTimeout(greet, 1000);
console.log('this is the execution of life');

*/

///////////////////////////////////// program 2 to display settimeout method
/*
function greet(){
    console.log('Hello world');
}

let intervalcode = setTimeout(greet, 3000);
console.log('id:' + intervalcode);
*/

// program to display time every 3 seconds
/*
function showTime(){
    let dateTime = new Date();

    let time= dateTime.toLocaleString();

    console.log(time);

    setTimeout(showTime, 3000);
}

showTime();
*/

//////////////////////////////////////////////////////
/**
 * JavaScript clearTimeout()
As you have seen in the above example, the program executes a block of code after the specified time interval. If you want to stop this function call, you can use the clearTimeout() method.

The syntax of clearTimeout() method is:

clearTimeout(intervalID);
Here, the intervalID is the return value of the setTimeout() method.
 */


//Example 3: Use clearTimeout() Method
/*
let count = 0 ;

 function increaseCount(){
     count +=1;
     console.log(count);
 }

 let id = setTimeout(increaseCount, 3000);

 

 clearTimeout(id);
 console.log('settime is stopped');
 */
/**
 * Note: You generally use the clearTimeout() method when you need to cancel the setTimeout() method call before it happens.

You can also pass additional arguments to the setTimeout() method. The syntax is:

setTimeout(function, milliseconds, parameter1, ....paramenterN);

When you pass additional parameters to the setTimeout() method, these parameters (parameter1, parameter2, etc.) will be passed to the specified function.

For example,
 */

// program to display a name
/*
function greet(name, lastName){
    console.log('Hello' + '' + name + '' + lastName);
}


setTimeout(greet, 1000,'John',  'Nayak');

*/
/*
function showTime(){
    let dateTime = new Date();

    let time = dateTime.toLocaleString();

    console.log(time);

    setTimeout(showTime, 3000);
}

showTime();
*/


function greet(){
    console.log('hello world');
}

let intervalId = setTimeout(greet, 3000);
console.log('Id=' + intervalId);