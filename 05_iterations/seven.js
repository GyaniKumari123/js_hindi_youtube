const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// we have to add 10 on all numbers
// const add10=myNumbers.map((nums)=> nums+10);
// chaining
const newNums=myNumbers
        .map((num)=> num * 10)
        .map((num)=> num + 1)
        .map((num)=>"Gyani_"+num)
console.log(newNums);
