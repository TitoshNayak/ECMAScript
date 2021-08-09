/*
A multidimensional array is an array that contains another array. 
For example,


let data = [[1,2,3,] ,[1,3,4,],[4,5,6]];
console.log(data);


// Example
let student1 = ['jack', 24];
let student2 = ['sara', 54];
let student3 = ['peter', 66];

let studentsData = [student1, student2, student3];

console.log(studentsData);

*/

////
/*

let x= [
    ['jack', 43],
    ['sara', 88],
    ['peter', 56]
];
console.log(x[0]);
console.log(x[1]);
console.log(x[2]);



//Array's splice() method

let studentsData = [['jack',66], ['sara',33]];

studentsData.splice(1,0, ['peter', 23]);

console.log(studentsData);

////Iterating over Multidimensional Array
You can iterate over a multidimensional array using the Array's forEach() method to iterate over the multidimensional array. For example,
//////

let studentsData = [['jack',23],['sara', 9],];

studentsData.forEach((student) =>{
    student.forEach((data) =>{
        console.log(data);
    }
    );
});

*/

let studentsData= [['jack', 34] , ['sara', 44],['peter',77]

];

//studentsData[1][2] = 'Hello';
//studentsData.splice(1,0,['dog', 76]);
//studentsData.pop();
//studentsData.push(['cat',8]);
//studentsData.splice(1,1);


studentsData.forEach((student)=>{     //forEach loop followed
    student.forEach((data)=>{
        console.log(data)
;    }
    );
}
);

//console.log(studentsData);

///////

//using for loop
let studentsData= [['jack', 34] , ['sara', 44],['peter',77]

];
//looping outer array element
for(let i=0; i <studentsData.length;i++){
   //get inner length of the arrray element

   let innerArrayLength = studentsData[i].length;
    
      // looping the inner array elements
      for( let j=0; j<innerArrayLength; j++){
          console.log(studentsData[i][j]); 
      }
}

