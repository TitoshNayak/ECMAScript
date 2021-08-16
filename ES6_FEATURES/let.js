/**
 * 
 * JavaScript let Vs var
Here's the overview of the differences between let and var.

       let                                              	var
let is block-scoped.	                    var is function scoped.
let does not allow to redeclare variables.	var allows to redeclare variables.
Hoisting does not occur in let.          	Hoisting occurs in var.
 ///////////////////////////////////////

 /**
  * 
  * JavaScript let Vs var in Local Scope
var is function scoped
The variable declared inside a function with 
var can be used anywhere within a function. For example,
  */

//program to print the text
//variable a cannot be used here
/*
function greet(){
    // variable a cannot be used here
    var a = 'hello';
    console.log (a);
}

greet();
*/

/////////////////////////////

/**
let is block-scoped
The variable declared with let 
can only be accessed inside a block of code. For example,
*/

//program to print the text
//variable  a cannot be used here
/*
function greet(){
    let a = 'hello';
     //variable b cannot be used here    
       if (a == 'hello'){
           let b = 'world';
           //console.log(a +''+ b);
       }   

       console.log(a +''+ b);
}

greet();
////////////////



function Add(){
    let a = 'myname';
    if(a=='myname'){
        let b ='your name';
        console.log(a+ '' + b);

    }
    console.log(a+ '' + b);


}
Add();*/


/////////////////
/**
 * 
 * let doesn't allow to redeclare Variables
1. A variable declared 
with var can be redeclared again. For example,
 */

//var a = 8;
//var a = 9;
//var a = 10;  // redeclaration of variable support
//console.log(a);
//

//let a = 8;
//let a = 9; /// redeclaration of vsrisbleis not support
//var a = 10;
//console.log(a);


//
/*2. Redeclaring a variable with var in a different scope or block changes the value of the outer variable too. For example,



var a = 5;
console.log(a );
{
    var a = 3;
    console.log(a);
}
console.log(a);

*/



// redeclaration of  the variable
/*
var a = 3;
var a = 4;
var a = 9;
console.log(a);

*/

//let a =3;
//let a=5;
//console.log(a);

/*

function add()
{
    var  a ='hello';
console.log(a);

}

add();

*/
/*
function add(){
    let a = 'hello';
   
    if(a=='hello'){
        let b = 'world';
        console.log(a +''+ b);

    }

   // console.log(a + '' + b);
}
add();
*/

/**
 * 2. Redeclaring a variable with var in a different scope or block 
 * changes the value of the outer variable too. For example,
 */
/*
var a = 6;
console.log(a);
{
    var a = 9;                 //redeclating a variable with var
    console.log(a);
} 
console.log(a);
/////////////
let a = 6;
console.log(a);
{
    let a = 9;
    console.log(a);
}
console.log(a);

*/

/**
 * 3. When a variable declared with var is used in a loop, 
 * the value of that variable changes. For example,
 

//

var a = 2;
for (var a = 0 ; a <3; a++) // increment of variable value at the end of execution
{
    console.log('hello');
}
console.log(a);

///////////

let a= 2;
for (let a = 0; a < 3; a++)  //no increment of cariable at the  end of execution
{
    console.log('hello');
}
console.log(a);

*/


//let Doesn't Allow Hoisting
  //console.log(a);
  //var a = 7;
   //let a=9;


   ///////////////////////////////////////////////////////////////////////////////

   // let in block level scope
/*
   let name = 'Ram';
   console.log(name);
   {
       let name = 'Sam';
       console.log(name);
   }
   console.log(name);

   //
   var name = 'Ram';
   console.log(name);
   {
       var name = 'Sam';
       console.log(name);
   }
   console.log(name);

   */

   