//JavaScript Arrow Function


/**
 
 * Things You Should Avoid With Arrow Functions
1. You should not use
 arrow functions to create methods inside objects.
2. You cannot use an arrow function as a constructor
 */



/*
function add(a,b)
{
   var a= 4, b = 8;
    console.log(a+b);////////////  normal function syntax

}
add();

*/

//FatArrow function syntax
/*
1.
var add=(a,b)=>{
    console.log(a*b);
}
add(8,9);
*/
//2.

//let x = (x ,y) => x * y ;
/*
let x = function(x,y)
{
    return x*y ;          //first way 
}

Example 1: Arrow Function with No Argument
If a function doesn't take any argument, 
then you should use empty parentheses. For example,


let greet=()=>console.log('helo');
greet();



//Example 3: Arrow Function as an Expression



 let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby


let sum = (a,b)=>
{
    let result = a + b ;
  return result;
}
let result1 = sum(4,7);
console.log(result1);


///
let sum = (a,b)=>
{
    let result = a + b;
    return result;
}

let result1 = sum(4,8);
console.log(result1);
/////////////
let sum=(a,b)=>console.log(a+b);
sum();


//this with Arrow Function

function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        // this is accessible
        console.log(this.age);

        function innerFunc() {

            // this refers to the global object
            console.log(this.age);
            //console.log(this);
        }

        innerFunc();

    }
}

let x = new Person();
x.sayName();


///////////////

function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayName();



//Arguments Binding
let x = function (){
    console.log(arguments);
}
x(3,7,8);

 ////////////
  let x = (...n)=>
  {
      console.log(n);
  }
  x(3,5,6,8);


  //spread operator syntax

  let x = (...n)=>
  {
      console.log(n);
  }
  x(5,7,8,9);

  let x=(...n)=>{
console.log(n);
  }
  x(1,4,5);
*/
  //////////////////////////////////////////////
  ////////////////////////////////////////
  //Arrow Function with Promises and Callbacks

  //Arrow function provide better function syntax
  /*
  asynFunction().then(function(){
  
  return asyncFunction1();
}).then (function()   ////////////ES5 CODE
{
return asyncFunction2();
}).then(function(){
    finish;
});

*/asyncFunction()
.then(()=>asyncFunction1())
.then(()=>asyncFunction2())
.then(()=>asyncFunction3())
.then(()=>finish);