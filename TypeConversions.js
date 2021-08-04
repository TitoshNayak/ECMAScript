              // Javascript type conversions

 //The numbric string used with "+" sign then it gives the string.
                
                 //// // implicit conversion to string   /////////

// numeric string used with + gives string type
/*
let result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"

*/

// numeric string used with - , / , * results number type
/*
let result;

result = '4' - '2'; 
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2

*/


// non-numeric string used with - , / , * results to NaN
/*
let result;

result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result); // NaN

*/


// if boolean is used, true is 1, false is 0
/*
let result;

result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4

*/

                       //javascript Expliit Numbers conversions

            //convert string to number
/*
            let result;

            // string to number

            result = Number('324');
            console.log(result); // 324
            
            result = Number('324e-1')  
            console.log(result); // 32.4
            
            // boolean to number
            result = Number(true);
            console.log(result); // 1
            
            result = Number(false);
            console.log(result); // 0

            


            //In javascript the empty string and the null value returns zero '0'
            let result;
            result = Number(null);
            console.log(result);  // 0
            
            let result = Number(' ')
            console.log(result);  // 0

   
//You can also generate numbers from strings using parseInt(),
 //parseFloat(), unary operator + and Math.floor(). 
 //For example,

let result;
result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.01';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20

*/


//2. Convert to String Explicitly
//To convert other data types to strings, you can use either String() or toString(). For example,

//number to string
/*
let result;
result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()

*/