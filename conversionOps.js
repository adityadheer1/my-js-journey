let score = "33"
// console.log(typeof score); // this will return type as string.

let newScore = Number(score) // converted string 33 to Number 33
// console.log(typeof newScore); 

let loggedIn = "yes"// output is type as string

let newLoggedIn = Boolean(loggedIn)
// console.log(newLoggedIn);

console.log(typeof loggedIn);

/*
In Boolean
0 => False
1 => True
"" => False
"Yes" => True
*/

//ToPrimitive Value

console.log("1" + 2); // output => 12
console.log("1" + 2 + 2); // output => 122
console.log(1 + 2 + "2"); // output => 32 
// js will determine by the first datatype of the value.
