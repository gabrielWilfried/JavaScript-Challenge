/**
 * DEFINITION : Regular expressions (regex) in Javascript are powerful patterns used to match
 *              character combinations in strings. They allow fro advanced string manipulations,
 *              validations, and searching based on specific patterns.
 * 
 * 
 * Task : Validate an Email address using a regular expression.
 */



/**
 * Defining the validateEmail function to validate an email address.
 * 
 * validateEmail : parameter(email : string)
 *                 display the output to the console. 
 */
function validateEmail(email){
    if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)){
        console.log("Email validated");
        return true;
    }
    console.log("You entered an invalid Email");
    return false;
}

/**
 *  Using Arrow functions
 */

validateEmail = (email) => {
    if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)){
        console.log("Email validated");
        return true;
    }
    console.log("You entered an invalid Email");
    return false;
}
// testing my function 
let test = validateEmail("gabrielwilfried0808@gmail.com");
console.log(test);