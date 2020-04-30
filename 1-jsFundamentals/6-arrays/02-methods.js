let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"]; // indexes

for(let foodItem of food){ // for OF
    console.log(foodItem);
}

food.push("Pizza"); // pushes new elements into an array
console.log(food);

food.splice(1, 2, "Tacos"); // push into first index, removes next 2 indexes and replaces
console.log(food);

let removedFood = food.pop() // removes last element from array and returns it
console.log(removedFood);

food.unshift("Burritos");
console.log(food);