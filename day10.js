/**
 * DEFINITION:  Working with dates in JavaScript involves utilizing the
 *              Date objects to perform various operations related to 
 *              dates and times.
 * 
 * 
 * Task:  Get the current date and time and display it in a human-readable format. 
 *  
 */


/**
 * Definition of the getCurrentDateTime() to retrieve
 * the current date and time.
 */

// function getCurrentDateTime(){
//     var currentDate = new Date(); 
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//     const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
//     let day = days[currentDate.getDay()];
//     let month = months[currentDate.getMonth()];
//     var dateTime = "Current Date : "+ day + "/"  + currentDate.getDate() + "/"
//                     + month  + "/" 
//                     + currentDate.getFullYear() + " @ "  
//                     + currentDate.getHours() + ":"  
//                     + currentDate.getMinutes() + ":" 
//                     + currentDate.getSeconds();

//     console.log(dateTime);
// }

/**
 *  Using Arrow functions and Template literals.
 */

getCurrentDateTime = () => {
    var currentDate = new Date(); 
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    let day = days[currentDate.getDay()];
    let month = months[currentDate.getMonth()];
    var dateTime = `Current Date : ${day}/${currentDate.getDate()}/${month}/${currentDate.getFullYear()} @ ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    console.log(dateTime);
}
export default getCurrentDateTime;

// let date = getCurrentDateTime();
// console.log(date);

/**
 * NB : I must remove the day in the format before submitting the work
 *      I must also remove my test code before submission  
 */