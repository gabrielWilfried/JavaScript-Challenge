/**
 * DEFINITION : Local Storage in JavaScript is a web storage technology that allows you to store key-values 
 *              pairs in a web browser with no expiration date. It enables data to persist even after the 
 *              browser is closed and reopened, providing a way to store and retrieve data.
 * 
 * 
 * Task : Store and retrieve data using the browser's local storage
 * 
 */

/**
 * Function to store data in local storage
 */

const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

function storeData(key, data){
    try{
        const dataString = JSON.stringify(data);
        localStorage.setItem(key, dataString);
        console.log("Data successfully stored in the local storage");
    }catch(error){
        console.error("Error occurred when storing data : ", error);
    }
}

/**
 * Function to retrieve data from local storage
 */

function retrieveData(key){
    try{
        const storedData = localStorage.getItem(key);
        if(storedData){
            const retrieveData = JSON.parse(storedData);
            console.log("retrieved data : ", retrieveData);
            return retrieveData;
        }else{
            console.log("No data found in the local storage");
            return null;
        }
    }catch(error){
        console.error(`Error occurred when retrieving data : ${error}`);
        return null;
    }
}

const userData = {
    surname : "Gabriel Wilfried",
    email : "gabrielwilfried0808@gmail.com",
    age : 23
};

// console.log(storeData("userData", userData));
console.log(retrieveData("userData"));