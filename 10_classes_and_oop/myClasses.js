// ES 6
// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//   }
//   encryptPassword(){
//     return `${this.password}abc`;
//   }
//   changeUserName(){
//     return `${this.username.toUpperCase()}`
//   }
// }
// const chai=new User("chai","chai@fb.com",1213);
// console.log(chai);
// console.log("Method: ");
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());


// behind the scene
function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`;
  }
User.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`;
}
const tea=new User("tea","tea@fb.com",1233445);
console.log(tea);
console.log(tea.changeUserName());
console.log(tea.encryptPassword());