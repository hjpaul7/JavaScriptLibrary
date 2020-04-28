//Boolean (only two possible values, true or false)

let on = true; //data type of boolean
console.log(on);

let off = false; //data type of boolean

//Null - null is an empty value. think of it as an empty container (still a value) still exists as a space to
let empty = null;
console.log(empty);

//Undefined - default value when a variable is not initialized

let undef = undefined
let correct;

console.log(undef, correct);

//Numbers
let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded); //at 16 characters, numbers will be rounded up

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let aNumber = Number("123");
console.log(aNumber);

//Strings - strings are datatypes used to represent text and are either wrapped in single quotes, double quotes, or string interpalations
let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `backticks`;

console.log(stringOne, stringTwo, stringThree);

let first = 1050 + 100;
let second = "1050" + "100";
console.log(first); //will come back 1150
console.log(second); //will come back 1050100

let first = 1050 + 100;
let second = "1050" + "100";
console.log(type of first); //will come back as number
console.log(type of second); //will come back as string

//Objects - objects are used to store many values instead of a singular value

let frodo = {
    race: "hobbit",        //curly braces are an object
    rings: 1,              //paired
    cloak: true            //race would be NAME, assign value with ":" and then the value
}
console.log(frodo); //test it

//Arrays - arrays are containers that hold lists of items
/*
    let list = [    "item1",   "item2",     "item3"    ](
    (1)       (2)         (3)

    1 - name of Array
    2 - arrays are denoted by square brackets
    3 - notice each value is seperated by a comma
*/
//                (1)   (2)  (3)
let burritos = ["large", 4, true];
//              string| num | boolean
console.log(burritos);
console.log(typeof burritos);
        //to understand arrays, they let you grab INDIVIDUAL parts of the object, instead of the whole section

let burritos = {
    1: "large"
    2: 4
    3: true
}

let first = 1050 + 100;
let second = "1050" + "100";
console.log(typeof first); 
console.log(typeof second); 

let third = 1050 + "100";
console.log(typeof third);

let challenge = {
    firstName: "Hustin",
    lastName: "Jeffers",
    houseNumber: "29",
    street: "Linwood Ave", //in console log, these will show "firstName, lastName, etc"
    city: "Indianapolis",
    state: "Indiana",
    zipcode: "46201",
}
console.log(challenge);

let firstName = "Hustin";
let lastName = "Jeffers";
let houseNumber = "29";
let street = "Linwood Ave";
let city = "Indianapolis";
let state = "Indiana";
let zipcode = 46201;
console.log(firstName, lastName, houseNumber, street, city, state, zipcode);
console.log(`${firstName} ${lastName}, ${houseNumber}`)

let myName = "Hustin";
console.log(myName.length); //purple boxes are methods, blue are properties
                            //.length counts the indicies in a string

console.log(myName.toUpperCase())
                        //invoking the function with the ()

let home = "My home is downtown";
console.log(home.includes("downtown"));
                        //check our home variable string, and check if "downtown" is included in that string. TRUE or FALSE. it is a boolean

let sent = "This sentence will be split into individual parts";
console.log(sent.split(" "));