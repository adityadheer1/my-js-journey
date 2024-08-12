// Immediately Invoked Function Expressions (IIFE),two main functions of IIFE
//i) Immediate execution of Function, ii) Prevent the scope pollution in global scope.

function chai() {
    console.log("DB Connected");
}
chai() //Normal executiom of function, in order to invoke IIFE, we need to add () around the declaration of Function

//BASIC SYNTAX
// (function)()

(function chai() {
    console.log("DB Connected");
})() // IIFE invoked.
