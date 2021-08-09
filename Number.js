/*
  JavaScript Number Methods
Here is a list of built-in number methods in JavaScript.

Method	Description
isNaN()	determines whether the passed value is NaN
isFinite()	determines whether the passed value is a finite number
isInteger()	determines whether the passed value is an integer
isSafeInteger()	determines whether the passed value is a safe integer
parseFloat(string)	converts the numeric floating string to floating-point number
parseInt(string, [radix])	converts the numeric string to integer
toExponential(fractionDigits)	returns a string value for a number in exponential notation
toFixed(digits)	returns a string value for a number in fixed-point notation
toPrecision()	returns a string value for a number to a specified precision
toString([radix])	returns a string value in a specified radix(base)
valueof()	returns the numbers value
toLocaleString()	returns a string with a language sensitive representation of a number
*/

//const   a = 2.8 + 7.9;
//console.log(a.toFixed(1));

//console.log(typeof a);
/*
const a=12;

const b = new String('hello');
console.log(a);
console.log(b);

console.log(typeof a);
console.log(typeof b);



//For example,

let a=6, b = 'hi! hello', c= NaN;
//console.log(Number.isInteger(a));
//console.log(Number.isInteger(b));


console.log(Number.isNaN(c));

/////////////////////////////



JavaScript Number Properties
Here is a list of Number properties in JavaScript.

Property	Description
EPSILON	returns the smallest interval between two representable numbers
MAX_SAFE_INTEGER	returns the maximum safe integer
MAX_VALUE	returns the largest possible value
MIN_SAFE_INTEGER	returns the minimum safe integer
MIN_VALUE	returns the smallest possible value
NaN	represents 'Not-a-Number' value
NEGATIVE_INFINITY	represents negative infinity
POSITIVE_INFINITY	represents positive infinity
prototype	allows the addition of properties to Number objects
For example,

// largest possible value
const a = Number.MAX_VALUE;
console.log(a); // 1.7976931348623157e+308

// maximum safe integer
const a = Number.MAX_SAFE_INTEGER;
console.log(a); // 9007199254740991

*/

              ///converting the data  types to number

              const a = '78';
              const result= Number(a);
              console.log(result);

              console.log(typeof a);



