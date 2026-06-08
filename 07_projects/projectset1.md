# project related to DOM'
## project linl
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
# Solution Code
## project 1
``` javascript
console.log("Hitesh)
const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body");
buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener("click",function(e){
   console.log(e);
   console.log(e.target);
   if(e.target.id==="grey"){
    body.style.backgroundColor=e.target.id;
   }
   if(e.target.id==="white"){
    body.style.backgroundColor=e.target.id;
   }
   if(e.target.id==="yellow"){
    body.style.backgroundColor=e.target.id;
   }
   if(e.target.id==="blue"){
    body.style.backgroundColor=e.target.id;
   }
   
  
  })

})



```
## project 2
```const form=document.querySelector("form");
// this usecase will give you wrong answer
// const height=parseInt(document.querySelector("#height").value)
form.addEventListener('submit',function(e){
 e.preventDefault();
 const height=parseInt(document.querySelector("#height").value);
 const weight=parseInt(document.querySelector("#weight").value);
 const results=document.querySelector("#results")
 if(height==='' ||height<0 || isNaN(height)){
   results.innerHTML="please give a valid height"
 }

 else if(weight==='' ||weight<0 || isNaN(weight)){
  weight.innerHTML="please give a valid weight"
}
else{
  const bmi=(weight/((height*height)/10000)).toFixed(2);
  // sshow result
  results.innerHTML=`<span>${bmi}</span>`
  
}

})
```
## project 3
``` javascript
const clock=document.getElementById('clock');

setInterval(function(){
  let date=new Date();
  // console.log(date.toLocaleString())
  // const textnode=document.createTextNode(date.toLocaleString());
  // clock.appendChild(textnode);
  clock.innerHTML=date.toLocaleString();
  
},1000)
```