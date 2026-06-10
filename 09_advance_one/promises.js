// fetch("url").then().catch().finally()  // this is the way of consuming promise
// promise is an object
// lets create promises
// PROMISE ONE
const promiseOne=new Promise(function(resolve,reject){
    // Do an async task
    // DB Calls
    // cryptography
    //network call
    setTimeout(()=>{
        console.log("Async task is complete")
        resolve();
    },1000);
})
// lets consume promiseOne
promiseOne.then(function(){
    console.log("Promise Consumed");
})
///  PROMISE TWO
new Promise(function(resolve,reject){
    setTimeout(()=>{
    console.log("Async task 2")
    resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// PROMISE THREE

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"Chai",email:"chai@example.com"});
    },1000)
}).then(function(user){
   console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"Hitesh",password:'123'})
        }
        else{
            reject('ERROR:Something went wrong')
        }

    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username;

})
.then((username)=>{
    console.log(username);

})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("Promise is either resolved or rejected")
})

const promisefive=new Promise(function(resolve,reject){
    setTimeout(()=>{
    let error=true;
    if(!error){
        resolve({username:"hitesh",password:"123"})
    }
    else{
        reject('ERROR:Something went wrong');
    }
    },1000)
})
async function consumePromiseFive(){
    try{
    const response=await promisefive;
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive();

async function getAllUsers(){
   try{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
   const data=await response.json;
   console.log(data);

   }
   catch(error){
    console.log(error);
   }
}
getAllUsers();