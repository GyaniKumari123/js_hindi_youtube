// const userEmail="h@hitesh.ai"
// if(userEmail){
//     console.log("Got user email")
// } else{
//     console.log("Dont't have user email")
// }

// +++++++++++ FALSY VALUES +++++++++++
// false ,0,-0,BigInt 0n,"",null,undefined,NaN
// Truthy value: 
// "0",'false'," ","false",[],{},function(){}
const userEmail=[]
if(userEmail.length===0){
    console.log("Array is empty");
}
const emptyObject={}
if(Object.keys(emptyObject).length==0){
    console.log("Object is empty")
}
// false ==0  true
// false==""  true
// 0==""    true

// Nullish colescing operator(??): null undefined
let val1;
val1=5??10
val1=null?? 10
val1=undefined??10;
val1=null??10??20??30
console.log(val1)
// terniary operator
// condition? true:false
const teaprice=100;
teaprice<=80?console.log("less than 80"):console.log("more than 80")

