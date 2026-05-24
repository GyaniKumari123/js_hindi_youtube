// arrays
// all datatypes items/elements
// Array is an objects
// variable size  javascript array
// we can use array as an elements of array
// indexing start from zero
// creates shallow copy
const myArray=[0,1,2,3,4,5,6]
const myHeros=["shaktiman","naagraj"];
const myArray2=new Array(1,2,3,4);
// console.log(myArray[0]);
// console.log(myArray.length);
// console.log(myArray);
// console.log(typeof myArray);
// const newArray=myArray.join(); // convert integer array into string datatypes array
// Array methods
// 1.push, 2.pop,3.unshift(3)[insert element at start of the array]
// 4.shift()[delete the first element of an array]
// includes(8) returns boolean value
// indexOf(7) [returns -1 if that element does not exit in an array]
//.join [adds all elements as astrings]
// slice [in slice original array does not changes]
// splice [original array manipulated]
// console.log(myHeros.push(10));
// console.log(myHeros)
// console.log(myHeros.pop());
// console.log(myHeros)
// console.log(myHeros.unshift(11111));
// console.log(myHeros)
// console.log(myHeros.shift());
// console.log(myHeros)
// console.log(myHeros.includes("shaktiman"));
// console.log(myHeros.indexOf("shaktiman"));
console.log("A. ",myArray);
const new_my_array=myArray.slice(0,5);
console.log(new_my_array);
console.log("B. ", myArray);
const new_my_array_two=myArray.splice(0,5);
console.log(new_my_array_two);
console.log("C. ",myArray);

