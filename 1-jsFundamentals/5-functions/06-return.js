let hi = () => {
    //1
    return 'hi'; // allow use information from a function outside the curly braces
}

//      2       3
let greeting = hi();
/*
    1- the keyword that brings our data out of our function
    2- a new variable to hold the value of the return
    3- when called, the function becomes the value of the return
    */

    console.log(greeting);

// example
function name(firstName) {
    return `Hello, ${firstName}`;
}

let greetedName = name('Leia Organa')
    console.log(greetedName);

// concise body implied return example
// let name = (firstName) => `Hello, ${firstName}`

function capitalizeName(name){
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
}

let correctName = capitalizeName('hUsTiN');
console.log(correctName);

// example

function areaOfRectangle(length, width) {
    let area = length * width
    return area;
}

let width = 5;
let length = 5;

let newArea = areaOfRectangle(length, width);
console.log(newArea);

// challenge - build a tip calculator

function tip(bill, twentyPercent) {
    let tip = bill * twentyPercent
    return tip;
}

let bill = 100;
let twentyPercent = .2;

let totalTip = tip(bill, twentyPercent) + "%";
console.log(totalTip);