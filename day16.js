/**
 * DEFINITION : Promises in JavaScript are a critical feature used for handling asynchronous
 *              operations. They represent a placeholder for future values or an eventual 
 *              result of an asynchronous operation allowing you to write more 
 *              manageable and readable asynchronous code.
 * 
 * 
 * Task :  Convert a callback-based code to use promises.
 * 
 */ 


/**
 * Using promises
 */

function doneCallback(){
    console.log("done");
}

function simulateAsync(num, callback){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            num++;
            console.log(num);
            if(num < 10){
                simulateAsync(num, callback)
                            .then(resolve)
                            .catch(reject);
            }else{
                resolve();
            }
        }, 1000);

    });
}

simulateAsync(0, doneCallback).then(() => doneCallback());