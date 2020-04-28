/*
Ledger:
    variable for name whos value is currently undefined
    function called foo, that does { .. code stuff .. }
    */

    console.log(name);
    foo();

    // Pretend there's lot of code in between

    function foo() {
        console.log("Does this work");
    }

    //LET and CONST cannot be defined