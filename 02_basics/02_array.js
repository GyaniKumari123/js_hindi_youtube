const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"];
// marvel_heros.push(dc_heros); // add whole array as an elements
// console.log(marvel_heros);
// marvel_heros.concat(dc_heros);
// console.log(marvel_heros);// add whole array as an elements\
// const marvel_and_dc_heroes=marvel_heros.concat(dc_heros);
// console.log(marvel_and_dc_heroes);

// ... spread operator [through spread operator we can add more then two array as elements]
const all_new_heroes=[...marvel_heros,...dc_heros];
console.log(all_new_heroes);

// flat(give depth) method to use as a single array when an array contains arrays of arrays
const another_array=[1,2,3,[4,5,6],[6,[7,8,[122]]]];
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

// Array
console.log(Array.isArray("Hitesh")); // Checks Hitesh is a array or not and return boolean value

console.log(Array.from("Hitesh")); // from creates array of Hitesh
console.log(Array.isArray(real_another_array));
// we can give object,string as a arguments to from()
// from array create krta hai
console.log(Array.from({name:"hitesh"})) // agr from direct array create nhi kr pa rha hai toh empty array return karega
// hame batana parega ki keys ka array banana hai ya value ka
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
//.of return a new array from set of Elements(elements may be varibles,array)
// learn Array. ease,from,of