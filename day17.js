/**
 * DEFINITION : Async/Await is a powerful feature in JavaScript Used to handle asynchronous
 *              operations more elegantly and with cleaner syntax. It's built on top of Promises
 *              and provide more straightforward way to work with asynchronous code.
 * 
 * 
 * 
 * Task : Refactor Promises-based code to use async/await syntax  
 */

function simulateAsync(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            num++;
            console.log(num);
            if(num < 10){
                simulateAsync(num).then(resolve).catch(reject);
            }else{
                resolve();
            }
        }, 1000);
    });
}


/**
 * Wrap an asynchronous operation in an async function
 */

async function simulateAsyncOperation(){
    try{
        await simulateAsync(0);
        console.log("done");
    }catch(error){
        console.error(error);
    }
}

simulateAsyncOperation();