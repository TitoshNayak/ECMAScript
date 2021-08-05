// program to print i value
/*
for(let i=1; i<=10; i++){
    if (i==6){
        break;
    }
    console.log(i );
}
*/

// Example 2: break with nested Loop

for (let i=1; i<=3; i++){

       for(let j=1; j<=3; j++){
           if(i==2){
               break;

           }
           console.log(`i = ${i }, j=${j}`);
       }
}