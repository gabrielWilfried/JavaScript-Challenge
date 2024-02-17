/**
 * DEFINITION : In JavaScript, array methods are powerful tools used to
 *              perform various operations and arrays.
 * 
 * 
 * Task : Use array methods to perform various operation on an array of numbers or objects.
 * 
 */


/**
 * Map, filter and reduce operation on an array of numbers.
 */
const arr = new Array("1", "2", "3", "4");

/**
 * Map() method
 */
triple = (n) => n*3;
var array = arr.map(triple);
console.log(array);

/**
 * reduce() method
 */
product = (a,b) => a * b;
var productOfArray = arr.reduce(product);
console.log(productOfArray);

/**
 * filter() method
 */
Even = (n) => n % 2 == 0;
var newArray = arr.filter(Even);
console.log(newArray);
/**
 * Alternatively it can be written by passing the function as a parameter of filter
 */
var anotherArray = arr.filter(function(n){
    return n % 2 == 0;
});
console.log(anotherArray);