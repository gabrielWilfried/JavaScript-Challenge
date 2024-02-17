/**
 * DEFINITION : Error handling in Javascript involves managing and
 *              handling errors that may occur during the execution 
 *              of a code. There are different approaches and construct to handle 
 *              errors effectively.
 * 
 * 
 * Task : Write a code to demonstrate the use of try... catch for handling errors
 * 
 */



/**
 * Writing the divideNumbers function that takes two parameters.
 * parameter => divisor : integer.
 * parameter => divident : integer.
 */

function divideNumbers(a,b){
    try {
        let result = a / b;
        console.log(result);
    } catch (error) {
        console.log("This is the error that occur : ", error);
    }finally{
        console.log("The divideNumbers function was called");
    }
}

/**
 *  Using Arrow functions
 */

divideNumbers = (a,b) => {
    try {
        let result = a / b;
        console.log(result);
    } catch (error) {
        console.log("This is the error that occur : ", error);
    }finally{
        console.log("The divideNumbers function was called"); // this block will always be executed
    }
}

let test = divideNumbers(2,0);
console.log(test);