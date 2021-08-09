/*
JavaScript for...in loop
The syntax of the for...in loop is:

for (key in object) {
    // body of for...in
*/

//Example 1: Iterate Through an Object
/*
const student= {
    name:'Monica',
    class : 7,
    age : 12                      //using the for in loop 
}

for ( let key in student){
    console.log(`${key}=${student[key]}`);
}

*/


///////////
  //Example 2: Update Values of Properties
/*
  const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
};
    
     for ( i in salaries){
         let salary = "$" + salaries[i];

         console.log(`${i}: ${salary}`);
     }
    


     // for in wiht string

     const string = 'Titosh';

                                   //for in with string
     for ( let i in string){
     console.log(string[i]);

     }*/


     ///for in with array
/*
     array = ['hello', 1];
       
     for (let i in array){
         console.log(array[i]);
     }


     const Array = ['Hello' , 1, 'javascript'];

     for (let i in Array ){
         console.log(Array[i]);
     }
     


     const Example= [1,4,6,7,8,"number"];

     for (let x in Example){
     console.log(Example[x]);
    }
    


    const salaries= {
        num1:200,
        num2:400,
        num3:500,
         num4:600
        };

    for(let i in salaries){
    let salary= "$" + salaries[i];

     console.log(`${i} : ${salary}`);

    }



let string='helo';

for (let i in string)
{
    console.log(string[i]);
}

*/
////

const mixed = [
    'num','you',12
];


for (let x in mixed){
    console.log(mixed[x]);
}