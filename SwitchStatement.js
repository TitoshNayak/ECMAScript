// https://www.programiz.com/javascript/switch-statement
 
  // Syntax
  /*
switch(variable/expression) {
    case value1:  
        // body of case 1
        break;

    case value2:  
        // body of case 2
        break;

    case valueN:
        // body of case N
        break;

    default:
        // body of default
}



// example to the switch case

let a=3;
switch (a)
{
    case 1: a='one';
    break;

    case 2: a= 'two';
    break;

    case 3: a= 'three';
    break;

    default: a='not found';
    break;
}
console.log(`The value is ${a}`);

*/
    // simple calcualtor using javascript with switchcase statement

    let result;

    const operator= parseInt(prompt("Choose any operator to proceed: either(+ , - ,* , / ,%)"));
   
     const number1=prompt("Enter a  first number for the operatiion:");
     const number2=prompt("Enter the second number to operate:");
 
      switch (ooperator)
      {
          case '+':
                result =number1 + number2;
                console.log(`${number1} + ${ number2}= ${result}`);
                break;

           case '-':
            result =number1 - number2;
            console.log(`${number1} - ${ number2}= ${result}`);
            break;

         case '*':
            result =number1 * number2;
            console.log(`${number1} *${ number2}= ${result}`);
            break;

            case '/':
                result =number1 / number2;
                console.log(`${number1} / ${ number2}= ${result}`);
                break;

      case '%':
        result =number1 % number2;
        console.log(`${number1} % ${ number2}= ${result}`);
        break;

         default: 
         console.log('Invalid operator');
         break;
      }
    














