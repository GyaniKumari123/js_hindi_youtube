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