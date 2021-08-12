/**
 * Module is a file that contains code to perform a specific task. A module may contain variables, 
 * functions, classes etc. Let's see an example,
 
export function greetPerson(name){
    return ` Hello ${name}`;
}

import {greetPerson} from './ES6Files/modules.js';

let displayName = greetPerson('jack');

console.log(displayName);


 //exporting a function
 export function greetPerson(name){
     return `Hello ${name}`;
 }

 //importing greetPerson from modules.js file
 import { greetPerson } from './ES6Files/modules.js';

 let displayName = greetPerson('jacl');

 console.log (displayName);

 */

 //////////////////////

 export function Add(value){
     return `hello $ {number}`;
     
 }