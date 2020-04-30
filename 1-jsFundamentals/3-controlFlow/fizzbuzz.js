// fizzbuzz challenge
let FB = 25;

if (FB % 3 === 0 && FB % 5 == 0) {
  console.log("Fizz Buzz");
} else if (FB % 3 == 0) {
  console.log("Fizz");
} else if (FB % 5 == 0) {
  console.log("Buzz");
}

// fizzbuzz challenge 2
let fizzBuzz = () => {
  for (x = 0; x <= 100; x++) 
    if (x % 5 == 0 && x % 3 == 0) {
    console.log("Fizz Buzz");
  } else if (x % 3 == 0) {
    console.log("Fizz");
    } else if (x % 5 == 0) {
    console.log("Buzz");
    } else {
      console.log(x);
  }
  }
  fizzBuzz();