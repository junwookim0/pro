const array1 = [1,4,9,16];
const map1 = array1.map(x => x*2);
//retrun 값을 없을 경우 undefined
const map2 = array1.map(x => {x*2});
console.log(map1);
console.log(map2);


const num = [1,16,49,121]
const map3 = num.map((x) => {
    if(x % 2 == 0) {
        return x/2;
    }else{
        return Math.sqrt(x);
    }
})
console.log(map3);

const testnum = [1,2,3,4]
const map4 = testnum.map((x)=> (x %2 == 0) ? x/2 : Math.sqrt(x))
console.log(map4);


//삼항 연산자 
let a =10;
let b =5;
let max = a > b ? a : b ;
console.log(max);

let accessAllowed;
let age =30;
let funC = age > 18 ? accessAllowed= true : accessAllowed = false;
console.log(funC);

//스프레드 연산자 (...z) : 배열혹은 객체의 값을 꺼내서 보여주는 연산자
const z = [1,2,3];
const za = [4,5,6];
const zac = [...z,...za]
console.log(zac);
//스프레드 연산자랑 가능기능인  ' concat '
const plus = z.concat(za);
console.log(plus);
//스프레드 연산자와 구조화 : 구조화 할때 사용하게 되면 남은 값을 다들고온다 (배열)
const [one, two, ...rest] = z;
console.log(rest);


const myVehicle = [{
    brand : 'ford',
    model : 'Mustang'
}]
const updateMyVehicle= [{
    type : 'car',
    year : 2021,
}]
const myUpdatedVehicle = myVehicle.concat(updateMyVehicle);
console.log(myUpdatedVehicle);


