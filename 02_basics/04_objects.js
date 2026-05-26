// objects using singelton
// const tinderUser=new Object() // singelton object
const tinderUser={} // not a singelton object
tinderUser.id="123abc";
tinderUser.name="abc";
tinderUser.isLoggedIn=false;
console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Hitesh",
            lastname:"Choudhry"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj3={obj1,obj2};// method 1
const obj3_new_syntax1=Object.assign(obj1,obj2);// method 2 syntax 1
const obj3_new_syntax2=Object.assign({},obj1,obj2);// method 2 syntax 2
const obj3_new_one={... obj1,...obj2};// ... spread operator  method 3
console.log(obj3);
console.log(obj3_new_syntax1);
console.log(obj3_new_syntax2);
console.log(obj3_new_one);
// array of objecs;
const user=[{name:"Gyani Kumari"},{roll:2406071}]
console.log(user[0].name);
console.log(user[1].roll);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// console.log(Object.length (tinderUser));
console.log(Object.entries(tinderUser)); // all elements of object converted into arrays
console.log(tinderUser.hasOwnProperty('isLogged'));
