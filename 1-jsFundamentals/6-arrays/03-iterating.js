let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

// for (let i = 0; i < food.length; i++) {
//     console.log(food[i]);
// }

food.forEach((foodItem, i) => console.log(i, foodItem)); // does the same as the example above CONCISE BODY

// challenge
let movies = ["Interstellar", "Infinity War", "Endgame"];
movies.push("Rogue One");
movies.splice(2, 1, "Avatar");
    movies.forEach((movieTitle, i) => console.log(i, movieTitle));