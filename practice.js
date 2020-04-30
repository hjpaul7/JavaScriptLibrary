// exponential practice
function getSquare (number) {
    return number * number;
}
getSquare();
    console.log(getSquare(100, 100));

// one more time
function getSquare2 (number) {
    return number * number;
}
getSquare2();
console.log(getSquare(25, 25));

// once more
function getSquare3 (number) {
    return number * number;
}
getSquare3();
    console.log(getSquare3(3, 3));

// timer practice
var timer = function (seconds) { // the function timer with the parameter 'seconds'
    if (seconds > 0) { // if/else - if the parameter of the function is > 0
        console.log(seconds) // then console the parameter
        return timer(seconds-1) // and return the functions parameter subtracting by 1
} else { // if 'if' fails
    return seconds // return the parameter
}
}
timer(100); // run function

// try to write the function again

function timer2 (seconds) {
    if (seconds > 0) {
        console.log(seconds);
        return timer2(seconds-1);
    } else {
        return seconds;
    }
}
timer2(6);

// one last time
function timer3 (seconds) {
    if (seconds > 0) {
        console.log(seconds);
        return timer3(seconds-1);
    } else {
        return seconds;
    }
}
timer3(10);

// scope practice
var carName = "Honda" // this variable is global, can be used in and outside a function

    function whatCar (){ // function name whatCar
        console.log(carName); // looking for carName outside the function
    }
whatCar(); // run function

// local scope error practice 
function whatCar () {
    var myCar = "Toyota"; // this is local scope, variable can't be used outside function
}
console.log(myCar); // will throw error because myCar is undefined

// local scope practice
function whatCar () {
    var myCar = "Toyota";
        console.log(myCar);
}
whatCar(); // yeah boi

// parameters
function petNameandBreed (name, type) {
    var petDetails = name + ", " + type;
    console.log(petDetails);
    return petDetails;
}
petNameandBreed("Theresa", "Calico");

// type it out one more time
function petNameandBreed2 (name, type) {
    var petDetails2 = name + ", " + type;
    console.log(petDetails2);
    return petDetails2;
}
petNameandBreed2("Theresa", "Calico");


// quiz question
for (let j = 0; j <= 10; j +=2) {
    console.log(j);
}


// quiz question
function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, 2, 3, 4));


// quiz question
  function foo () {
    return bar();
    function bar() {
      return "Poppin' bottles";
    }
  }
  console.log(foo());

// quiz question
function whatDoesItDo(val) {
    return val ? 1 : 2;
  }; 
  whatDoesItDo();