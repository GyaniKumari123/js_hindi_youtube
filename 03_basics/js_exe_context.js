// javascript execution context means how js will run your program
// {}=> global execution context refers to this
// Global EC
// FUNCTION EC
// EVAL EC
// Js code->phase one memory creation
//      -> phase two execution phase

let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2;
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)
// flow of above code snippet
// 1.Global execution=>this
// 2.Memory phase
// val1,val2=undefined
// addnum->function defination
// result1->undefined
// result2->undefined
// 3.Execution phase
// val1<-10,val2<-5
// addnum->(new variable Environment+execution therad)
// Now memory phase and execution phase will run for function calls
// jitne bar function call hoga utne baar memory phase and execution phase run hoga
// memory phase for function call>>>>>>>>>>>
// val1->undefined
// val2->undefined
// total->undefined
// ++++++++++execution phase++++
// num1->10
// num2->5
// total->15
// total value returned to global execution context
