// const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]

// weekDays.forEach( function (days) {
//     console.log(days);
// } )

// weekDays.forEach( (days) => {
//     console.log(days);
// } )

// const myCoding = [
//     {
//         languageName : "JavaScript",
//         fileName : "js"
//     },
//     {
//         languageName : "Java",
//         fileName : "java"
//     },
//     {
//         languageName : "Python",
//         fileName : "py"
//     }    
// ]



// const save = myCoding.forEach( (item) => {
//     item.languageName
// } )
// console.log(save); //output: undifined, because forEach cannot hold value in a variable. In order to store value we can use .filter

// application of .filter

const evenNum = [2, 4, 6, 8, 10]

const saveThisForMe = evenNum.filter( (num) => num > 4 )
console.log(saveThisForMe);