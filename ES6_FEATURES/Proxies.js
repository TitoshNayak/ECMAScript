/**
 * avaScript Proxies
In this tutorial, you will learn about JavaScript proxies with the help of examples.

In JavaScript, proxies (proxy object) are used to wrap an object and redefine various operations into the object such as reading, insertion, validation, etc. Proxy allows you to add custom behavior to an object or a function.

Creating a Proxy Object
The syntax of proxy is:
     
          new Prixy(target,handler);

          Here,

new Proxy() - the constructor.
target - the object/function which you want to proxy
handler - can redefine the custom behavior of the object
For example,

 */
/*
let student1 = {
    name : "helo",
    age : 77
}

const handler = {
    get: function(obj, prop){
        return obj[prop] ? obj[prop] : 'doest not exist';
    }
}

const proxy = new Proxy(student1, handler);

console.log(proxy.name);
console.log(proxy.age);
console.log(proxy.class);

*/





////////////////////////////////////////////////////////////////////

     /**
      * Proxy handlers
Proxy provides two handler methods get() and set().

get() handler
The get() method is used to access the properties of a target object. For example,
      */

/*
let student = {
    name : 'my name is knam'
}

const handler = {
    get (obj, prop){
        return obj[prop];
    }
}

let proxy =  new Proxy(student , handler );

console.log(proxy.name);

*/
///////////////////////////////////////////////////////////////////

  /**
   * set() handler

The set() method is used to set the value of an object. For example,
   */

/*
  let student = {
      name: 'name'
  }

  let handler =  {
      set: function(obj, prop , value){
          obj[prop]= value;
         
      }
  };

  let person = new Proxy(student,handler);

  person.age = 34;

  console.log(person)
  /*

  ///////////////////////////////////////////////////////////////

  
  /**
   * Uses of Proxy
                           1. For Validation
You can use a proxy for validation. You can check the value of a key and perform an action based on that value.

For example,
   */
/*
 let student = {
     name : 'nanu',
     age : 55
 }

 const handler ={
      get(obj, prop){
          if (prop == 'name'){
              return obj[prop];
          }
          else{
              return 'Not allowd';
          }
      }
 }


 const proxy = new Proxy(student, handler);

 console.log(proxy.name);
 console.log(proxy.age);
/*


/////////////////////////////////////////////////


                     /**2. Read Only View of an Object
                      
There may be times when you do not want to let others make changes 
in an object. In such cases, 
you can use a proxy to make an object readable only.
 For example, */
/*

let student = {
    name : 'helly',
   age : 99
}

const handler = {

    set: function(obj, prop, value){
        if(obj[prop]){
            console.log('read only')
        }
    }
};


const proxy = new Proxy(student, handler);

proxy.name = 'john';
proxy.age = 66;


*/
////////////////////////////////////////////////////////////////

 /**
  *                             3. Side Effects
You can use a proxy to call another function when a condition is met.
 For example,
  */


 /*
 const myFunction = () => {
    console.log("execute this function")
};

const handler = {
    set: function (target, prop, value) {
        if (prop === 'name' && value === 'Jack') {
            // calling another function
            myFunction();
        }
        else {
            console.log('Can only access name property');
        }
    }
};

const proxy = new Proxy({}, handler);

proxy.name = 'Jack'; // execute this function
proxy.age = 33; // Can only access name property


*/




