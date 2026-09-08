"use strict";

//totalGlobalVariable = "never do this";
//console.log(totalGlobalVariable);
var globalVariable = "global scope";

//const public = "public variable";

{ //block scope
    var someValue = 433
    {
        var someValue = 123
    }
    console.log(someValue);
}

{
    let otherValue = true;
    {
        let otherValue = false;
    }
    console.log(otherValue);
}

for(let i = 0; i <= 5; i++){
    setTimeout( () => {
        console.log(i);
    }, 1000);
}