let a = 2;
    let     b       =       1
/*  (1)     (2)    (3)     (4)
1-keyword
2-variable name
3-assignment operator
4-variable value
*/

console.log(a + b);

/*
    notes of variables:
        - a variable must begin with a letter, underscore or $ sign
        - numbers may follow the above characters, but cannot come first
        - javascript is case sensitive. 'hello' and 'Hello' are different variables
        - no space are allowed in variable names
        - camelCase is the best practice for naming variables
            - camelCase, snake_case, PascalCase
        - 3 different ways to declare variables (var, let, const)
            -var and let are similiar, but const is different. that value MUST stay constant
            */
        var c = 1;
        let d = 2;
        const e= 3;     //value must remain constant   
    // (declaration)
    /* Declarations are the LEFT side of a variable
        - it is simply: let x

        Initializations are the RIGHT side of a variable
            = it sets the value of the variable (= 3 for example)
            - it incorporates the variable name, asignment operators, and the value
            */

            let x;
            console.log(x); //run code, it will come back "undefined" which is actually a value

            x = 10;
            console.log(x); //comes back 10

            x = 33;
            console.log(x); //come back 33

            const x
            console.log(x); //will error out, const needs to be initialized

            const x = 20;
            x = 10;
            console.log(x); //will error out, x has to remain constant

            let today = "First day"
            let mood = "happy"
            console.log(today, mood); //the point is words can be variables too