const myObject={
    Js:"Javascript",
    CPP:"C++",
    rb:"ruby",
    swift:"swift by apple"
}
// we cant apply for of loop on object
// Lets apply for in loop
for(const key in myObject){
    console.log(key) // it will print key of the object
    console.log(myObject[key]) // it will print value of the objevt
    console.log(`${key} : ${myObject[key]}`); // it will print key and values both
}
// Applying for in loop on an array
const programming=["CPP","PYTHON","JS"]
for(const index in programming){
    console.log(index);
    console.log(programming[index]);
    console.log(`${index}: ${programming[index]}`);
}
// map is not iterable thats why we cant apply for in loop on map
const map=new Map();
map.set("IN","India")
map.set("USA","United states of America")
map.set("Fr","France");
for(const key in map){
    console.log(key)
}