//to loop over things are iterable (parsed through with numbers)

let student = {
  name: "Peter",
  awesome: true,
  degree: "JavaScript",
  week: 1,
};

for (let item of student) {
  console.log(item);
}

let catArray = ["tabby", "british", "burmese"]; //returns as 0, 1, 2 because they are objects
for (let cat of catArray) {
  console.log(cat);
}
