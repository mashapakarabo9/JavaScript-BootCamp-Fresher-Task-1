//DataType Operators
//Execise 1 : Numbers

let num_int = 43;
let num_float = 32.53;

let addition = num_float + num_int;
let subtraction = num_int - num_float;
let multiply = num_float * num_int;
let modulus = num_int % num_float;
let division = num_int / num_float;
let exponents = num_int **num_float;

console.log("Addition ="+addition);
console.log("subtraction = "+subtraction);
console.log("Multiplication = "+ multiply);
console.log("Modulus = "+modulus);
console.log("Division = "+division);
console.log("exponents = "+exponents);


//Exercise 2 :boolean and operators

let results;
if(num_float >= num_float)
    {
        results = true;
    }
  else
  {
    results =false;
  }

  let x = 8;
  let y = 12;

  if(x > y)
    {
        console.log("X is greater than Y");
    }

 if(x <= y)
    {
        console.log("X is less than or equal to Y");
    }

    if(x ==y)
        {
            console.log("X is equal to Y");

        }

        if(x != y)
            {
                console.log("X is not equal to Y");
            }

    
    //3.

    let a = true;
    let b = false;

    console.log(a && b);
    console.log(a || b);
    console.log(!a);

    //4. 

    let p = 10; // variable declaration and assignment

    p += 22;
    console.log(p);

    p -= 22;
    console.log(p);

    p *= 22;
    console.log(p);

    p /= 22;
    console.log(p);

    p %= 22;
    console.log(p);