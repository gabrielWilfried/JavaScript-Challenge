/**
 * In Javascript, an array is a fundamental data structure 
 * used to store a collection of elements. It is a versatile
 * and dynamic object that allows you to store multiple values
 * in a single variable.
 * 
 * Task: Create an array of colors and perform various operations on it 
 */

const colors = ["white","red", "yellow", "blue", "orange", "green", "black", "brown" ];
console.log(colors);

console.log("------------------------------------------------------------------------------------");

/**
 * The pop() method: removes the last element from an array.
 *                   returns the value that was "popped out".
 */

colors.pop();
console.log(colors);

console.log("------------------------------------------------------------------------------------");

/**
 * The push() method: adds a new element to an array (at the end).
 *                    returns the new array length.
 */

colors.push("purple");
console.log(colors);

console.log("------------------------------------------------------------------------------------");

/**
 * The shift() method: removes the first array element and "shifts" all other elements to a lower index.
 *                     returns the value that was "shifted out".
 */

colors.shift();
console.log(colors);