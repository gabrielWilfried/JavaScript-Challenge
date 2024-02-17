/**
 * Functions in Javascript serve as reusable block of code that can be defined
 * and called to perform a specific task or return a value.
 * 
 * Task: Write a function that takes two parameter and return their sum
 */

function calculateSum(a, b){
    return a + b;
}

/**
 *  Using Arrow functions
 */

calculateSum = (a,b) => a + b;


/**
 * calling the function with 2 and 3
 */

 let result = calculateSum(2,3);
 console.log(result);

 /**
 * calling the function with 10 and 31
 */

 result = calculateSum(10,31);
 console.log(result);