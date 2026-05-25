// singleton
// obects created through literals and constructor
// constructor objects=> singelton
// literals object=>  not singelton
// keys value pairs
// onject through constructors
// Object.create
// object literals
// const JsUser={} // enpty object
// keys always string
const mySym=Symbol("Key1");
const JsUser={
    // mySym:"Key1",
    [mySym]:"Key1",
    name:"Gyani",
    "full name":"Gyani Kumari",// cant access through dot only access through square
    age:23,
    location:"Bihar",
    email:"gyanik.ug24.cs@nitp.ac.in",
    isLoggedIn:false
}
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log( typeof JsUser.mySym); // output string datatypes
// console.log(typeof JsUser[mySym]); // output symbol datatypes

// updating the values of object
JsUser.name="Hitesh Choudhry";
console.log(JsUser.name);
// Object.freeze(JsUser) // freeze methods upadate not allowed
JsUser.greeting=function(){
    console.log("Hello Everyone I hope you all are doing well")
}
JsUser.greetingtwo=function(){
    console.log(`Hello JS User ,${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo());


