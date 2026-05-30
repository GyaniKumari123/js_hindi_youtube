// Block scope : const and let
// global scope:var
// let a=10;
// const b=20;
// var c=30;
 // {} curley braces are called  scopes
//  if(true){
//     let a=10;
//     const b=20;
//      var c=30; // not block scope
//       d=40  // not block scope
//  }
// // console.log(a);
// // console.log(b);
// console.log(c);
// console.log(d);

// nested scope
// function one(){
//     const username="Hitesh";
//     function two(){
//         const website="youtube";
//         console.log(username);
//     }
    // console.log(website)
//     two();
// }
// one();

// if(true){
//     const username="Hitesh";
//     if(username==="Hitesh"){
//       const website=" youtube";
//       console.log(username+website)
//     }
//     // console.log(website);
// }
// // console.log(username);

// ++++++++++++INTERESTING+++++++++++++
console.log(addone(5)) // no error
function addone(num){
    return num+1;
}
addone(5);
//  console.log(addtwo(6)); // IT WILL SHOW ERROR
const addtwo=function(num){ // JS variable can store function and jason value
    return num+2;
}
addtwo(5)