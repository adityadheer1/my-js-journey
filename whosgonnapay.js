var names = ["Aditya" , "Steve", "Bill", "Jeff", "Elon", "Mark"];

function whoIsPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to pay the bill";
}
whoIsPaying(names);