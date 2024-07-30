// if (true) {
//     // let a = 10
//     // const b = 20 // BLOCK SCOPE and anything outside this block is GLOBAL SCOPE
//     // var c = 30
// }

//NESTED SCOPE

// function one() {
//     const username = "Aditya"

//     function two() {
//         const website = "youtube"
//         // console.log(username);
//     }
//     // console.log(website);

//     two()
// }
// one()

// console.log(addone(5));

// function addone(num) { // using this method won't return any error
//     return num + 1
// }

console.log(addtwo(5));
const addtwo = function(num){ // trying to define function as an expression where a variable holds the function, this way will call an error if we call function before defining.
    return num + 2
}

