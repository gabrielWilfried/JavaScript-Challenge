/**
 * DEFINITION : FETCH API in JavaScript provides a way to make network requests (HTTP request)
 *              to retrieve resources like JSON data, image, files, or even HTML content 
 *              from a server or external source.
 * 
 * 
 * Task : Fetch data from an external API and display it on your web page.
 * 
 */

/**
 * Specify the api endpoint 
 */
const apiUrl = "https://api.weatherapi.com/v1/current.json?key=5b631177e97a4d7fbe7150545241702&q=Cameroon&aqi=no";


/**
 * Making a GET request using the FETCH API
 */


fetch(apiUrl)
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(weatherData => {
        const location = weatherData.location.name;
        const temperature = weatherData.current.temp_c;
        const paragraph = document.createElement("p");
        const node = document.createTextNode(`Weather in ${location}: ${temperature} °C`);
        paragraph.appendChild(node);
        const element = document.getElementById("weather");
        element.appendChild(paragraph);
    })
    .catch(error => {
        console.error('Error:', error);
    })