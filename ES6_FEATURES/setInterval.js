/**
 * Javascript setInterval()
In this tutorial, you will learn about the JavaScript setInterval() method with the help of examples.

In JavaScript, a block of code can be executed in specified time intervals. These time intervals are called timing events.

There are two methods for executing code at specific intervals. They are:

setInterval()
setTimeout()
In this tutorial, you will learn about the setInterval() method.

JavaScript setInterval()
The setInterval() method repeats a block of code at every given timing event.

The commonly used syntax of JavaScript setInterval is:

setInterval(function, milliseconds);
Its parameters are:

function - a function containing a block of code
milliseconds - the time interval between the execution of the function
The setInterval() method returns an intervalID which is a positive integer.

Example 1: Display a Text Once Every 1 Second
 */

/*


function greet(){
    console.log('Hello world');
}

setInterval(greet, 1000);
*/

             //display time every 5 seconds

    function showTime(){
        let dateTime= new Date();
        
        let time = dateTime.toLocaleString();
        console.log(time);
    }

   setInterval(showTime, 5000);