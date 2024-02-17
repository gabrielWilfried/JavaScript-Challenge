/**
 * DEFINITION : In Javascript, a higher-order function is a function that can take another function
 *              as an argument or return function as a result. This concept is an essential aspect of 
 *              functional programming and provide flexibility and abstraction in coding.
 * 
 * 
 * Task : Create a higher-order function that take a callback function and invokes it.
 * 
 */

/**
 * callback function to be passed in the higherOrderFunction
 */

function callbackFunction(){
    console.log("This is the callback function being invoked");
}


/**
 * higher-order function that takes a callback function as an argument and invoke the callback function 
 */

function higherOrderFunction(callback){
    callback();
}


/**
 *  call higherOrderFunction and pass callbackFunction as an argument 
 */
higherOrderFunction(callbackFunction);



