/**
 * DEFINITION:  Event handling in JavaScript refers to the process of responding to user interactions
 *              or actions, such as clicks, mouse movements, keyboard input, etc, within a web 
 *              application or webpage. Events are actions or occurrences detected by the browser 
 *              that the webpage or Javascript can respond to.
 * 
 * 
 * 
 * Task:  Attach an event listener to a button and perform an action when clicked
 * 
 * 
 */



/**
 *  Using the Id 
 */
document.getElementById("myBtn").addEventListener("click", DisplayMessage);


/**
 * The DisplayMessage function, displays a message to the console
 * say : "The target clicked the button" 
 */

function DisplayMessage(){
    console.log("The target clicked the button");
}

/**
 *  Using Arrow functions
 */

DisplayMessage = () => "The target clicked the button";