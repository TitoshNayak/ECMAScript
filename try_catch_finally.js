/*
Types of Errors
In programming, there can be two types of errors in the code:

Syntax Error: Error in the syntax. For example, if you write consol.log('your result');, the above program throws a syntax error. The spelling of console is a mistake in the above code.

Runtime Error: This type of error occurs during the execution of the program. For example,
calling an invalid function or a variable.
*/

////
/*
The try, catch and finally blocks are used to handle exceptions (a type of an error). Before you learn about them, you need to know 
about the types of errors in programming.

*/

///////////////////////////////////////
 //try{
     //body
// }
 //catch{
     //body of catch}
 //
///
//Example 
/*
const numerator = 100 , denominator = 'a';

try {
    console.log(numerator/denominator);
    console.log(a);
}
catch(error){
    console.log('an error caught');
    console.log('Error message: ' + error);
}
*/
///
/* 
let value = 2, num = 'hey';

try{
    console.log(value/num);
    console.log(num);
}
catch(error){
    console.log('An error caught');
    console.log('Error message :' + error);
}
*/

///Example 2: try...catch...finally Example
const numerator = 100 , denominator = 'a';

 try {
     console.log(numerator/denominator);
     console.log(a);
 }
 catch(error){
     console.log('an error caught');
     console.log('Error message: ' + error);
 }
 finally{
     console.log('finally');
 }

 //JavaScript try...catch in setTimeout
/*
 try{
       setTimeout(function(){
           //error in the code
       }, 3000);
 }
 catch(error){

    console.log("won't work");
 }
 
 */