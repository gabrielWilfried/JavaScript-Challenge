/**
 * Data types are used to classify one particular type of
 * data in programming languages. For instance, a number
 * and a string of characters are different type data 
 * that will be treated differently by javascript
 */





const surname = "Gabriel";
const age = 23;
var active = 1;


// var out = ''.concat(surname, " is active and has ", age);
var out = `${surname}, is active and has, ${age}.`;
console.log(out);
active--;
console.log(active)

    
// out = ''.concat(surname," is not active and has ",age);
var out = `${surname}, is not active and has, ${age}.`;
console.log(out);
active++;
console.log(active)


console.log("We are done");


