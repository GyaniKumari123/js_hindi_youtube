// for of
// ["","",""]
// [{},{},{}]
// const arr=[1,2,3,4,5]
// // for of loop
// for (const num of arr) {
//     console.log(num);
//     }

// const greetings="HELLO WORLD"
// for(const char_in_greetings of greetings){
//     console.log(char_in_greetings)
// }
// Datatypes Maps
// key value pair 
// value mast be unique
// duplicate entry are not allowed
// order are maintained
// const map=new Map();
// map.set("IN","India")
// map.set("USA","United states of America")
// map.set("Fr","France");
// // console.log(map)
// for(const key of map){
//     console.log(key)
// }
// for(const [key,value] of map){
//     console.log(`${key}: ${value}`);
// }
// applying for of loops on object
const myObject={
    name:"Gyani Kumari",
    role:"Software Developer",
    Home:"Bihar",
    email:"gyani@gmail.com"
}
for(const key of myObject){
    console.log(key)
}