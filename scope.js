if (true) {
    let a = 10
    const b = 20 // BLOCK SCOPE and anything outside this block is GLOBAL SCOPE
    var c = 30  // with using var to declare a variable 'c', it will defy the law of scopes and   will overflow from its block scope
}

//NESTED SCOPE

function one() {
    const username = "Aditya"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website); // this will return error as const website is in block scope.

    two()
}
one()

console.log(addone(5));

function addone(num) { // using this method won't return any error
    return num + 1
}

console.log(addtwo(5));
const addtwo = function(num){ // trying to define function as an expression(where we use a variable to hold a function) where a variable holds the function, this way it will call an error if we call function before defining.
    return num + 2
}
