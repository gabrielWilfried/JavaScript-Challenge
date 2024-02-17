/**
 * DEFINITION : Asynchronous JavaScript programming using callbacks is a functional concept
 *              for handling tasks that might take some time to complete, such as fetching data 
 *              from a sever or by executing time-consuming operations without blocking the 
 *              execution of the other code.
 * 
 * 
 * Task : Simulate an asynchronous operation using callbacks.
 * 
 */


/**
 * higher-order function 
 */

function simulateAsync(num, callback){
    setTimeout(function(){
         num++;
        console.log(num);
        if(num < 10){
            simulateAsync(num,  callback);
        }else{
            callback();
        }
    }, 1000);
    
}

simulateAsync(0, function(){
    console.log("done");
})
