// function
// function saymyname(){
//     console.log("Name:Gyani Kumari");
//     console.log("B.Tech 3rd year student of NITP");
// }
// saymyname();

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }

// function addtwonumber(number1,number2){
//     let result =number1+number2;
//     return result; 
//     console.log("Hitesh") // kabhi print nhi hoga kyuki return ke baad khuchh operation 
    // ya print nhi hota hai
// }

// addTwoNumber(3,4); 
// const result=addTwoNumber(5,6);
// console.log(result);
// addTwoNumber(5,6);
// 3 and 4 are called arguments
// number1 and number2 are called parameters

// function loginUserMessage(username="Sam"){
//     if(username===undefined){
//         console.log("please enter your user name")
//         return
//     }
//     return `${username} Successfully loggedIn`
// }
// const message=loginUserMessage("Hitesh Choudhry");
// console.log(message);
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());
// empty string and undefined considered as false value
// ~undefined ,~"" are called true
// ... called rest operator
// rest opertaor pack the value into an array
// function calculate_cart_price(value1,value2,...num1){
//    return num1;
// }

// console.log(calculate_cart_price(100,200,300));

// How to pass object in a function
// const user={
//     username:"Gyani Kumari",
//     price:199
// }
// function handleObject(anyobject){
//    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
// }
// handleObject(user);
// handleObject({
//     username:"Sam Mohit",
//     price:10000
// })

// How to pass array to function
function returnSecondValue(getArray){
  return getArray[1];
}
const myNewArray=[100,200,300];
console.log(returnSecondValue(myNewArray));