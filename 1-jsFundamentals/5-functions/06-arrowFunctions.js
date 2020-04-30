//  variable       fat arrow
    let hi =   ()   => {
        console.log('hi');
    }

    // arrow functions were introduced ES6. They are basically a more concise way to write expressions. NOT DECLARATIONS, this means arrow functions do no get hoisted

 // BLOCK BODY
let hi = () => {
    console.log('hi');
    //lots of code goes here
}
// NOTE: block body arrow functions must have a return (if you want to get back information) in the body of the function
// (return must be inside the curly braces)

// CONCISE BODY
let hi = () => console.log('hi'); // can only do one thing in concise body
// NOTE: concise body arrow functions return by default

// BLOCK BODY Example
let greeting = name => {
    console.log(`Greetings, ${name}`)
}
greeting('Hustin')

// NOTE: when you have no or multiple parameters, you must include parenthesis; however when you have a single parameter the parathesis are optional