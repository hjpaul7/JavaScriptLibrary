let x = 12; //this x variable can now be used through this whole file

//Example of scope below:
function scope() {
    let x = 33;
    console.log(x);
}

scope();
console.log(x); //will come out as 12 and 33

let y = 12;

function scope2() {
    y = 33;
    console.log(y);
}

scope2();
console.log(y); //will come out as 33 and 33


/*VAR EXAMPLE BELOW, READ NOTES FIRST

-------the result will be 45, 45, 12. because FUNCTION replaces x (12)   as 33, until we hit the FUNCTION which makes x 45, then is console logged (YOUR FIST 45 in results). The issue with var is is leaks out of the function block, thus the second console log results in 45. then the last console log is the initial variable, 12.

"Var is scoped to the nearest function block, meaning it looks for a functions curly braces and scopes to the nearest one, if it is not inside curly braces it is made a global variable"

"It wont leak out of the function block, but if you have nested code blocks in your function. they can leak out of that code block into the functions"

*/
var x = 12;

function varTest() { 
var x = 33; 
        if (true) { 
            var x = 45;
            console.log(x);
        }
        console.log(x);
    }
    varTest();
    console.log(x);


/*LET EXAMPLE 
------The difference here between LET and VAR is that LET does not bleed  ouf of the function block
*/
let x = 12;

    function varTest() {
        let x = 33; 
        if (true) {
            let x = 45;
            console.log(x);
        }
        console.log(x);
    }
    varTest();
    console.log(x);