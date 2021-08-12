/**
 * 
 * Note: You can also use other built-in error constructors for standard errors: TypeError, SyntaxError, ReferenceError, 
 * EvalError, InternalError, and RangeError.
 * /

For example,

throw new ReferenceError('this is reference error');
 */

//For example,

//const number = 5;
//throw number/0; // generate an exception when divided by 0

////
/*
JavaScript throw with try...catch
The syntax of try...catch...throw is:

try {
    // body of try
    throw exception;
} 
catch(error) {
    // body of catch  
}
*/
//////
//Example 1: try...catch...throw Example
/*
const number = 40;
try {
    if(number > 50){
        console.log('success');
    }
    else{
        throw new Error('The number is low');
    }
    console.log('hello');
}
catch(error){
    console.log ('An error caught');
    console.log('Error message :' +error);
}
*/

//
/*
const number = 40;

try{
    if (number <30){
        console.log('The number is greater');
        

    }else{
        throw new Error('The number is big');

    }
    console.log('hello');
}
catch (error){
    console.log(' an error caught  ');
    console.log('Error message : '+ error) ;
}*/

////////////////////////////////////////
/**
 * Rethrow an Exception
You can also use throw statement inside the catch block to
 rethrow an exception. For example,
 */

 const number = 5;
try {
     // user-defined throw statement
     throw new Error('This is the throw');

}
catch(error) {
    console.log('An error caught');
    if( number + 8 > 10) {

        // statements to handle exceptions
         console.log('Error message: ' + error); 
        console.log('Error resolved');
    }
    else {
        // cannot handle the exception
        // rethrow the exception
        throw new Error('The value is low');
    }
}