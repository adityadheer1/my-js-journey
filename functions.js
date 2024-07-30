function add(num1, num2) {      // num1 and num2 are paras
    console.log(num1 + num2); // console.log does not return any value.
}

function addition(number1, number2) {
    let calculated = number1 + number2
    return calculated
}
calculated = addition(5, 5)
// console.log("Result:", calculated);
 // 2 and 5 are arguements. Without using () in function, we are just refering that memory place and not calling it.

 
 // Using rest operator.

 function cartTotal(...num1) { // rest operator
    return num1
 }

//  console.log(cartTotal(200, 500, 300));

 // using objects in Functions

 const user = {
    username : "Aditya",
    age : 25
 }

 function printDetails(anyobject) {
    console.log(`Hey my name is ${username}, and I am ${age} years old`);
 }

//  printDetails(user)

//Using Array with function

const myArray = [200, 300, 400]

function getSecondValue(getArray) {
   return getArray[1]
}

console.log(getSecondValue(myArray));