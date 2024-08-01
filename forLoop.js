//for
//SYNTAX
for (let index = 0; index < array.length; index++) {
    const element = array[index];    
}

// FOR LOOP WITHIN FOR LOOP (NESTED FOR LOOP)

for (let i = 0; i <= 10; i++) {
    console.log(`OUTER LOOP VALUE ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`INNER LOOP j : ${j} , INNER LOOP i : ${i}`);        
    }
}


// for loop on Array

let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]

for (let index = 0; index < weekDays.length; index++) {
    const element = weekDays[index];
    console.log(element);
}

// BREAK AND CONTINUE KEYWORDS

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is detected");
        break //BREAK detected 5 and broke the loop right away
    }
    const element = index;
    console.log(element);
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is detected");
        continue // CONTINUE let the loop run but skiped logging 5
    }
    const element = index;
    console.log(element);
}








