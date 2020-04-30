function hi() {
    console.log('HI')
}

//to call function

hi(); //get function
console.log(hi);
console.log(hi());

//challenge - make function to call out numbers 1-10
function challenge() {
    for(x = 0; x <= 10; x++){
    console.log(x);
    }
}

challenge();

//challenge, function out each string

let arr = ['This', 'is', 'really', 'cool'];
function call() {
    for(let item of arr){
        console.log(item);
    }
}
call();