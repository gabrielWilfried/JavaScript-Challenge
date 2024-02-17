/**
 * Control flow in javascript, specifically using 
 * "if statements", allows you to control the execution of 
 * code based on specific conditions.
 * 
 * A function called checkEvenOdd with a parameter will be created.
 * The function will determine if a value is even or odd.
 * 
 */



// Writing a function that takes an integer value as parameter and says if the value is even or odd

function checkEvenOdd(value){
    if(value % 2 == 0){
        console.log("this value is an even number");
    }else{
        console.log("The value is an odd number");
    }
}

/**
 *  Using Arrow functions
 */

checkEvenOdd = (value) => {
    if(value % 2 == 0){
        console.log("this value is an even number");
    }else{
        console.log("The value is an odd number");
    }
}

// calling the checkEvenOdd function with a parameter 
let answer = checkEvenOdd(3);