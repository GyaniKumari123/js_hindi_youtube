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
## project 5
```javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>



  
  </div>
  `;
});

```
## project 6 Unlimited colors
``` javascript
// generate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let intervalID;
const startChangingColor=function(){
  if(!intervalID){
    intervalId=setInterval(changeBackground,1000);
  }
   
function changeBackground(){
  document.body.style.backgroundColor=randomColor();
}}

const stopChangingColor=function(){
clearInterval(intervalId);
intervalId=null;
}
document.getElementById("start").addEventListener('click',startChangingColor);
document.getElementById("stop").addEventListener('click',stopChangingColor);

```
