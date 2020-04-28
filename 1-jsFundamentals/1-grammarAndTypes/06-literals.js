/*Literals are simply just values that we as developers add to our code

Data types that we hard code in: string literals, numeric literals, booleans literals, object literals, and array literals.
*/

let         car         =           "ford";
                            //string literal, in between ""
let         december    =           12;
                            //numberic literal
let         tired       =           false;
                            //boolean literal
let soup = {
    a: "chicken noodles"
    b: "tomato"
    c: "beef and barley"
}                       //object literal

//Dot notation lets us dig in and grab a value

console.log(soup.a)

//array literal

//              0         1           3           4           5
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", ]
console.log(days.toString()); //Return string interpreation of array
console.log(days.length); //returns 5, 5 objects in the array