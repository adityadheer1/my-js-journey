//WHILE LOOP
// index = 1
// while (index <= 10) {
//     console.log(`value is ${index}`);
//     index = index + 1
// }

// WHILE LOOP ON ARRAY

let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
let index = 0
while (index < weekDays.length) {
    console.log(`Today is ${weekDays[index]}`);
    index = index + 1
}

// DO WHILE LOOP

let score = 1

do {
    console.log(`Score is ${score}`); // DO WHILE LOOP ITERATES ONCE BEFORE CHECKING THE CONDITION
    score = score + 1
} while (score <= 10);

// let score = 11
do {
    console.log(`Score is ${score}`);
    score = score + 1
} while (score <= 10);