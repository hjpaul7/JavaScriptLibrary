//loops are a way to repeat until a specified condition returns false
//three things to include to avoid infinite loops

let i = 7; //global variable

//    (1)     (2)   (3)
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);

/*
1 - is the initial expression, runs once before the loop starts (grabs i = 7 and resets to 0)
2 - condition, the loops runs until the condition evaluates to false
3 - increment expression, runs once after each iteration of the loop
*/

//challenge create a loop to less than 20 by increments of 2

for (i = 0; i < 20; i += 2) {
  console.log(i);
}

//challenge, using a for loop, count from 10 to 0, going down by 1

for (x = 10; x >= 0; x--) {
  console.log(x);
}

//challenge, using a for loops, count from 0, going down by 2's to -24
for (x = 0; x >= -24; x -= 2) {
  console.log(x);
}

//challenge, using a for loop, go through a name and display each character individually
let name = "Hustin";
for (i = 0; i < name.length; i++) {
  console.log(name[i]);
}

//challenge, make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
let sum = 0;

for (let i = 1; i <= 50; i++) {
  sum += i;
}

console.log(sum);
