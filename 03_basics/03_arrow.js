// This refers to current context
const user={
    username:"hitesh",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username} , welcome to our website`)
        console.log(this);
    }
}
// user.welcomemessage();
// user.username="Sam"
// user.welcomemessage();
// console.log(this); // {} empty current context
// function chai(){
//     let username="hitesh"
//     console.log(this.username)
// }
// chai()

// const chai=function(){
//      let username="hitesh"
//      console.log(this.username)
// }
// chai()

// const chai=()=>{
//     let username="hitesh";
//     console.log(this);
// }

// chai();

// const addtwo=(num1,num2)=>{
//    return num1+num2
// }

// implicit return arrow function
// const addtwo=(num1,num2)=>  (num1+num2)

const return_object=()=>({username:"Hitesh Choudhry"})

console.log(addtwo(9,10)) 