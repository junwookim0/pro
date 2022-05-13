/*
class Student extends User{
    constructor(name,age,major){
        super(name, age);
        this.major = major;
    }
    study(){
        console.log(`${this.major}를 공부합니다.`);
    }
    sayhi(){
        console.log(`${this.major}를 공부하는 학생입니다`);
    }
}
let student = new Student("홍길동",30,"코딩");
student.sayhi();
*/



class Dog{
    constructor(address){
        this.address = address;
    }
    sayhi1(){
        console.log(`${this.address}에 살고 있습니다`)
    }
}
class HouseDog extends Dog{
    constructor(family,name,age,address){
        super(family,name,age);
        this.address = address;
    }
    intro(){
        super.sayhi1();
        console.log(`${this.address}에 살고 있습니다`);
    }
}

let mydog1 = new HouseDog('진돗개','백구','1','부산');
mydog1.intro();


