// Primitive

// 7 types : String,Number,Boolearn, null,Undefined,Symbol,BigInt

const score=100
const scoreValue =100.3

const isLoggedIn = false 
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34567889344567890334n



// reference (non primitive)

// array,objcts, functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name : "kishori",
    age:22,
}

const myFunction = function(){
    console.log(" hello word");
}
console.log(typeof scoreValue);
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);