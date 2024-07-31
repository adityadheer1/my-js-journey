const user = {
    username: "Aditya",
    price: 999, 

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`); // "THIS" keyword refer to the current context. 
    }
}

// user.welcomeMessage()

// THIS keyword only works in object.

// function chai() {
//     let username = "Aditya"
//     console.log(this.username);
// }
// chai()

// ARROW FUNCTION

// const addTwo = (num) => {
//     return num + 2
// }

// console.log(addTwo(5));

// IMPLICIT RETURN
// const addTwo = (num) =>  num + 2 // in implicit we assume that you need to return the outcome.
// another way is to wrap in prenthesis
const addTwo = (num) =>  (num + 2) // we wrap in curly braces then we have to use RETURN keyword, Otherwise not


