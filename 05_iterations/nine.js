map method
const myNums=[1,2,3]
// initialValue=0;
const myTotal=myNums.reduce((accumulator,currentValue)=> 
    (accumulator+currentValue),0)
console.log(myTotal);

const myTotal=myNums.reduce(function (acc,curVal){
    console.log(`accumulator value: ${acc} and current value is: ${curVal}`);
    return acc+curVal
}, 0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName="Jscourse",
        price:9999
    }
    ,
    {
        itemName="Py course",
        price:9999
    }
    ,
    {
        itemName="java course",
        price:9999
    }
    ,
    {
        itemName="AI course",
        price:9999
    }
    
]

// we have to add total price 
const total=shoppingCart.reduce((acc,curVal)=>acc+curVal.price,0)
console.log(total);