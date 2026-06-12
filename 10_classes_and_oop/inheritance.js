class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME is : ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        this.email=email;
        this.password=password;
        super(username);
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai=new Teacher("chai","gyanik@fb.com",123);
console.log(chai);