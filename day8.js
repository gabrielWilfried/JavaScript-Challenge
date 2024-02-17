/**
 * Dom manipulation in Javascript involves interacting with the Document Object Model(DOM)
 * of an HTML document, allowing developers to dynamically modify its structure, 
 * content, and styling.
 * 
 * 
 * Task: Use JavaScript to manipulate the DOM by creating an HTML element Dynamically
 *       and appending it to the document.
 */


/**
 * We shall make us of the document.createElement() to create a new 
 * html node in javascript file 
 */

const paragraph = document.createElement("p");

/**
 * To add text to the <p></p> element, we create the text node first
 */

const node = document.createTextNode("Here is the paragraph content");

/**
 * Now we append the node to the <p> element
 * For that we shall use the .appendChild() method
 */

paragraph.appendChild(node);

/**
 * Finally we append the new element to an existing element
 */

const element = document.getElementById("day8");
element.appendChild(paragraph);