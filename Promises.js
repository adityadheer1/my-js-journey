//Creation is a Promise (1)
const promiseOne = new Promise(function (resolve, reject){  // Promise takes 2 params : Resolve and Reject
    // do any async task. For example: setTimeout
    setTimeout(function(){
        console.log('async task done');
        resolve()
    }, 2000)
}); 

//Consumption of Promise
promiseOne.then(function(){
    console.log("Promise fulfilled"); // in this outcome, we will never print promise fulfilled because we never connected .then() with resolve param of promiseOne(). on line 6, we will connect them.
})

//Creation is a Promise (2)
const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Aditya', email: 'aditya@dheer'})
    }, 1000)
})

promiseTwo.then(function(user){
    console.log(user.username);
})