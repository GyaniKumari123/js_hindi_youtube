// Primitive
// 7 Types: string,boolean,number,undefined,symbol,null,BigInt


// Referencetype(Non primitive datatypes)
 // Array , objects,functions

 const id=Symbol("123")
 const anotherId=Symbol("123")
 console.log(id==anotherId)
 console.log(id===anotherId)
 const bigNumber=1234456789n
 console.log(typeof(bigNumber))

 let myarray=["Apple","Banana","Mango"]
 let myobject={
    name:"Sam Mohit",
    class:"01 Std",
    Age:6
}

const myfunction=function(){
    console.log("Hello World")
}
// ++++++++++++++++++++++++++++++++++++++++++
// stack(primitive) ,Heap(Non-primitive)

