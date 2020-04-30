let num = 6;

num > 0 ? console.log("yes") : console.log("no"); //if (num > 0) you run console after "?", if false run console after ":"

//ternary is the short hand of IF ELSE, same example below

if (num > 0) {
  console.log("yes");
} else {
  console.log("no");
}

//multiple conditions, but it not effecient with multiple conditions

num == 0
  ? console.log("hello")
  : num > 0
  ? console.log("hi")
  : console.log("goodbye");

if (num == 0) {
  console.log("hello");
} else if (num > 0) {
  console.log("hi");
} else {
  console.log("goodbye");
}
