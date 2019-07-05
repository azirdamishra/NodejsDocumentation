var somePromise = new Promise((resolve, reject) => {
    //we do all the asynchronous logic work here
    //resolve and reject are two functions that we can call.
    setTimeout(() => {
        // resolve('hey it worked');
        reject('unable to fulfil promise');

    }, 2500);

});

somePromise.then((message) => {
    console.log('Success:' + message);
}, (errorMessage) => {
    console.log('Error:' + errorMessage);
});     // if there is only one function then it gets called only when the promise is resolved
