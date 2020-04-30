// let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(long.length);

let colors = ["blue", "green", "yellow", "red", "orange", "purple"];
// console.log(colors.length);

// console.log(colors.toString()); // convert array to string

// console.log(typeof colors); // lists what it is, an object

// challenge
console.log(colors instanceof Array);
colors.reverse();
colors.forEach(color => console.log(color));

// another way to write it
// (color instanceof Array) ? console.log(color.reverse()) : console.log("Not an Arry"); color.forEach(name => console.log(name));

// another way to write it
if (colors instanceof Array) {
    let newArr = colors.reverse();
    newArr.forEach(color => console.log(color))
} else {
    console.log("Not an array");
}

// using the forEach method, capitalize the first letter of each color, then lowercase the rest
// shit this was hard
let colors = ["blue", "green", "yellow", "red", "orange", "purple"];

// forEach example, block code example below
colors.forEach(color => console.log(color[0][0].toUpperCase() + color.slice(1).toLowerCase()));

// block code example, same as above
let correctSpelling = colors.forEach(color => {
    let newColor = color[0].toUpperCase() + color.slice(1).toLowerCase()
    console.log(newColor);
});