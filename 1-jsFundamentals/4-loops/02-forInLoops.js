//used to grab KEYS (forOfLoops are used for parsable (Numbers))

let student = {
  name: "Peter",
  awesome: true,
  degree: "JavaScript",
  week: 1,
};

for (let item in student) {
  //runs over our keys in the objects, arrays are objects
  console.log(item);
  console.log(student[item]);
}

let catArray = ["tabby", "british", "burmese"]; //returns as 0, 1, 2 because they are objects
for (let cat in catArray) {
  console.log(cat);
  console.log(catArray[cat]);
}

//challenge - write a for in loop that capitalizes the first letter of a name, and lowercase the rest of the name

let name = "hUSTIN";
if (name[0].toLowerCase()) {
  console.log(name[0].toUpperCase());
}

let name = "hUSTIN";
let capName; //not initialized

for (let l in name) {
  if (l == 0) {
    capName = name[l].toUpperCase();
  } else {
    capName += name[l].toLowerCase();
  }
}

console.log(capName);
