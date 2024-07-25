let myFriends = ["Steve", "Jeff", "Elon", "Mark", "Bill"]

// I want to call Elon from my array
// console.log(myFriends[2]);

// Ambani is my new friend, Lets add him
myFriends.push("Ambani")

// Me and Ambani are no longer friends, Lets remove him
myFriends.pop() // will remove the value present at the end of the array.

// Steve is no longer my best friend.
myFriends.shift() // will remove the value present in the beginning of the array.

// Tata is my best friend now.
myFriends.unshift("Tata") // will add the value present at the end of the array.
// console.log(myFriends);

console.log(myFriends.includes("Ambani")); // includes method returns boolean value, checks it an array has that element or not.
console.log(myFriends.indexOf("Jeff")); // indexOf method returns index of mentioned element.

let newFriends = myFriends.join() // will add all the elements into a string. ex: Tata,Jeff,Elon,Mark,Bill
console.log(newFriends); //datatype will also change to strings

// Difference of Slice and Splice

let myNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log("A" , myNum.slice(0, 5)); 
// console.log(myNum);

// console.log("B", myNum.splice(1, 5));
// console.log(myNum);

// Attach to or more arrays together.

let marvelHeros = ["Ironman", "Thor", "Hulk"]
let dcHeros =  ["Superman", "Batman", "Flash"]

// push method
// marvelHeros.push(dcHeros);
// console.log(marvelHeros); // it will return nested array. An array within an array.

// concate method
// let assemble = marvelHeros.concat(dcHeros)
// console.log(assemble); // will return a new array with both arrays added.

// spread method
let together = [ ...marvelHeros, ...dcHeros]
console.log(together); // Will return same as concate but it is more simple to execute.

const nestedArray = [1, 2, 3 ,[4, 5, [7, 8, 9], 6 ]]
// to convert a nested array into a single array we can use Flat method.
const unNestedArray = nestedArray.flat(Infinity)
console.log(unNestedArray);

