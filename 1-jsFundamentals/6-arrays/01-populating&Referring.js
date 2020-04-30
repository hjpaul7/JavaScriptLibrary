// array can store more than one data in a variable []
//   (1)  (2)      (3)
let list = [ "item1",       "item2"         "item3"];
/*
1 - variable name holding the array
2 - arrays are denoted by square brackets
3 - each item in the array must be seperated by a comma
*/
//             (0)        (1)       (3)
let fruit = ["orange", "banana", "apple"];
console.log(fruit[0]);

let students = [ // runs through array constructor
    "Mitchell", // string
    "Bill", // string
    "Brittany", // string
    23, // number
    true, // boolean
    ["Hustin", "Amanda", "John", [20, true, "Slayde"]] // another array nested in original array
]
console.log(students instanceof Array); // students array ran through the class constructor
console.log(students instanceof Object); // true, arrays are still objects
console.log(students[5][1]); // Amanda, grabs 5th array, and first index in array

// challenge, pull out "Slayde from the arrays"
console.log(students[5][3][2]); // 5th index, 3rd item, 2nd item in array