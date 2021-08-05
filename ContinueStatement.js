// program to print the value of i
/*
for(let i= 1; i<=5; i++)
{
    if(i==2){
        continue;
    }
    console.log(i);

}
*/

//continue with Nested loops

for (let i=1; i<=5; i++){

    for(let j=1; j<=5; j++){
        if(j==3){
            continue;
        }
        console.log(`The nested loops of the program is: ${i}, j= ${j}`);
    }
}