let name = "Husiin";

if (name == "Hustin") {
  console.log(`Hello ${name}`);
} else {
  console.log(`Well, is your name ${name}`);
}

//bronze

let name = "zAchARy";
if (name[0] === name[0].toUpperCase()) {
  console.log(name);
} else {
  console.log("Hey this isn't written correctly");
}

//silver

let name = "zAchARy";
if (name[0] === name[0].toUpperCase()) {
  console.log(name[0]);
} else {
  let len = name.length;
  console.log(name.slice(1).toLowerCase());
}

//gold

let name = "ZAchARy";
if (name[0] === name[0].toUpperCase()) {
  let isUpperCase = name[0] + name.slice(1).toLowerCase();
  console.log(isUpperCase);
} else {
  let notUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase();
  console.log(notUpperCase);
}

//challenge

let age = 21;

if (age >= 25) {
  console.log("Rent car");
} else if (age >= 21) {
  console.log("You can drink");
} else if (age >= 21) {
  console.log("You can vote");
} else {
  console.log("Too young");
}
