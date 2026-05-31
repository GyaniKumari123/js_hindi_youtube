// immediately Invoked Function Expressions(IIFE)
// main aim is to remove global scope pollution
// immediately run a function

// Normal function and function call
function chai(){
    console.log("DB Connected");
}
chai();

// IIFE function and function call
(function chaitwo(){    // named IIFI
 console.log("DB CONNECTED");
})
(); // appley semicolomn at the end of the function

// arrow function
(()=>{  // normal IFFI
 console.log("DB CONNECTED")
})
();// we can pass argument to this parenthesis

// PARAMETRISED IIFI
((username)=>{  // normal IFFI
 console.log("DB CONNECTED")
 console.log(username)
})
("HITESH");

// MULTIPLE IIFE