// IF
// if(condition = true){
//     scope
// }

let month = 3

if (month == 1) {
    console.log("Jan");
} else if (month == 2) {
    console.log("Feb");
} else if (month == 3) {
    console.log("Mar");
} else if (month == 4) {
    console.log("Apr");
}

// <, >, <=, >=, ==, !=

//Sometimes its better to use Switch instead of IF condition

/** SWITCH SYNTAX
 * switch (key) {
    case value:
        
        break;

    default:
        break;
}
 */
let month = 4
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break; // break keyword helps in breaking the control flow. Without break all the subsequent commands will also run but not the DEFAULT
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default");
        break;
}


// TERNIATY OPERATOR

// SYNTAX: condition ? true : false
//example

let loveMeter = 80

loveMeter <= 50 ? console.log("your chances for a successful marriage is less than 50%") : console.log("your chances for a successful marriage is more than 50%"); 

