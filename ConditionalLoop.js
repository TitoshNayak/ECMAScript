// link :https://www.programiz.com/javascript/if-else

//In JavaScript, there are three forms of the if...else statement.
/*
1.if statement
2.if...else statement
3.if...else if...else statement
*/


//1
/*
let a=8;
if (a>5)
{
    console.log( "Print the number="+a);
}

//check if the number is positive or not

const number = prompt("Enter the number:");

if (number > 0)
{
    console.log("The number is positive:" +number);
}


           //JavaScript if...else statement

           let age=18;

           if (age > 18)
           {console.log("He is adult of:" +age)

           }
           else{
               console.log("He is a child less than :" +age)
           }

        

           let num=2;

           if(num < 0){
               console.log(+num);
           }else{
              console.log("the number is negative :"+num);
            }

            


            let num = prompt("Enter a number");

            if(num > 0)
            {
                      console.log("The number is positive");
            }

            else if(num = 0)
            {
                console.log("the number is equal");
            }
            else {
                console.log("the number is negative");
            }
            */


            //Nested loop

            let number = prompt("Enter  a number");

            if (number >0)
              {
                  if(number==0)
                  {
                      console.log("the number you entered is 0");
                  }
                  else{
                      console.log("ethe number is positive");
                  }
              }
              else{
                  console.log("you have entered a negative number");
              }