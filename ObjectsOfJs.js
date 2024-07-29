// // Object Literals

const mySym = Symbol("Key1") // declaring a symbol

let player = {
    surname: "Kohli",
    number: 18,
    [mySym]: "Key1",
    nation: "India",
    role: "Batsman",
    captian: false,
    last5inn: [100, 20 , 15, 23, 85]
}

console.log(player[mySym]);
// // console.log(player["surname"]); // Need to define as string
// // console.log(player.surname); // No need to define as string


// // change the value in object

player.captian = true // This will change the values in objects
// console.log(player);
// // Object.freeze(player); // to freeze the values of object
// // player.number = 20
// // console.log(player);

player.fairwell = function(){
    console.log(`${this.surname} : Winning T20WC was the final stretch.`);
}

// console.log(player.fairwell());


//NESTING OBJECTS
const newUser = {
    email : "new@gmail.com",
    fullname : {
        firstName : "Mark",
        lastName : {
            midName : "Albert",
            familyName : "Costa"
        }
    },
    age : 22,
    online : false
}

// console.log(newUser.fullname.lastName.familyName);

// Combing objects

let obj01 = {a:1, b:2}
let obj02 = {c:3, d:4}

let obj03 = Object.assign({}, obj01, obj02)
// console.log(obj03); 


// OBJECTS DECONSTRUCTION
const course = {
    courseName: "JavaScript",
    price: "999"
}

// console.log(course.courseName);

const {courseName: Naam} = course
console.log(Naam);


