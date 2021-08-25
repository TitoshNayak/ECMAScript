/**
 * JavaScript Set and WeakSet
 * 
 * Set is similar to an array that allows us to store multiple items like numbers, strings, objects, etc. However, unlike an array,
 *  a set cannot contain duplicate values.
 */
/**
 * Create JavaScript Set
To create a Set, you need to use the new Set() constructor. 
For example,
 */
/*
const set1 = new Set();
console.log(set1);

const set2= new Set([1,'hey',{count:true}]);
console.log(set2);
                    //When duplicate values are passed to a Set object, the duplicate values are excluded.
const set3= new Set([1,11,22,1,1,22,44, 'hey',{count:true}]);
console.log(set3);

*/
/**
 

//const set1 = new Set([1,2,3,4]);
//console.log(set1.has(1));



//const set1 = new Set([1,2,3,4]);
//console.log(set1.values(1));

/**
 * Adding New Elements
You can add elements to a
 Set using the add() method. For example,
 */
/*

 const set = new Set([1, 2]);
console.log(set.values());

// adding new elements
set.add(3);
console.log(set.values());

// adding duplicate elements
// does not add to Set
set.add(1);
console.log(set.values());
*/

//const set1 = new Set([1,2,3]);
//console.log(set1);

//const set2 = new Set([1,1,3,3,5,'hello',{count: true}]);
//console.log(set2.values());         //has(2)

/*
 Adding New Elements
You can add elements to
 a Set using the add() method. For example,
 

const set = new Set([1,2]);
console.log(set.values());
     //adding the new element
    set.add(3);
    console.log(set.values());

    */

  /**
   * Removing Elements
You can use the clear() and the delete() method to remove elements from a Set.

The delete() method removes a specific element from a Set. For example,

 
const set = new Set([1,2,3]);
console.log(set.values());

//set.delete(2);
set.clear();
console.log(set.values());
*/
/*
Iterate Sets
You can iterate through the Set elements using the for...of loop or forEach() method. The elements are accessed in 
the insertion order. For example,
*/

const set = new Set([1,2,3]);
  //looping thorugh set
  for(let i of set){
      console.log(i);
  }

//forEach loop

////////////////////////////////////////////////////

/**
 * JavaScript WeakSet
The WeakSet is similar to a Set. However, WeakSet can only contain objects whereas a Set can contain any data types 
such as strings, numbers, objects, etc. For example,
 */