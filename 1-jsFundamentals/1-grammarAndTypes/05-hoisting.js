/*Javascript is interpreted top to bottom, line by line. The compiler makes two passes over our code. First pass looks for any declarations (anything to the left of the assignment operators), VAR/LET/FUNCTION. It stores the declarations to memory. The second pass if when the declarations are initialized, assign the values and execute the functions.

Read as is, and then interpreted (like python). Javascript doesn't need to be translated into a different architecture. 

*/

        let     x       =       12
//     ^first pass)^         ^(second pass)^

console.log(name);
let name ="Hustin"; //errors out, because "name" is undefined. it needs to be hoisted.

let name = "Hustin";
console.log(name); //this correct its, assignment a value to a      variable needs to be first

b();
            //calling the function above, before defining "b" (hoisted)
function b() {
    console.log("I have been hoisted");
}
