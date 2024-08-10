const custmId = 123
let custEmail = "customer@gmail.com"
var custPassword = "abc123"
custCity = "Delhi"
let custState; // upon console.log this variable will return its value as undefined.

// custmId = 321 #Changes were not allowed.
custEmail = "customer@yahoo.com"
custPassword = "123abc"
custCity = "Mumbai"

console.table([custmId, custEmail, custPassword, custCity]) // console.table will view all the values in a tabular structure.
