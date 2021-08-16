/**
 * JavaScript Default Parameters
 */

//Example
/*
function sum (x=5, y = 8 ){
    //return sum
    return x + y ;
}
console.log(sum(10,9));

*/


function sum ( x = 1 , y = x , z =  x+ y +2){
    
    console.log(x + y + z );
}
sum();