// // console.log("Hello World....");

// function combine(num1:number|string,num2:number|string,conversionType:"as-number"|"as-string"){
//     if(typeof num1==="number" && typeof num2==="number" || conversionType==="as-number"){
//         return +num1+ +num2;
//     } else {
//         return num1.toString() + num2.toString();
//     }
// };

// let answer1 = combine(15,8,"as-number");
// let answer2 = combine(15,"9","as-number");
// let answer3 = combine("Radha"," Krishna","as-string");

// console.log(answer1);
// console.log(answer2);
// console.log(answer3);

//& ------------------------------- UNION ----------------------------------------------------------------------
//! Union:- It is also known as OR of data types.
//! If you want that your variable accept to data types then UNION comes in pictures.

/*
type message = string;
const message="Jai Shree Ram"
console.log(message);

// function combine(num1:number|string, num2:number|string){
//     // return num1+num2;
//     if(typeof num1==="number" && typeof num2==="number"){
//         return num1 + num2;
//     } else {
//         return num1.toString() + num2.toString();
//     }
// }

// let answer1 = combine(16,5);
// let answer2 = combine("Radha"," Krishna");
// console.log(answer1);
// console.log(answer2);
*/

//& ---------------------------- Literal Types ---------------------------------------------------------------- 
//$ Literal types in TypeScript are used to create custom types that allow only specific, exact values. A variable with a literal type will only be valid if it matches one of those exact values.
/*
function combine(num1:string|number,num2:string|number,conversionType:"as-number"|"as-string"){
    if(typeof num1==="number" && typeof num2==="number" && conversionType==="as-string"){
        return num1.toString() + num2.toString();
    }else if(typeof num1==="number" && typeof num2==="number" || conversionType==="as-number"){
        return +num1 + +num2;
    } else {
        return num1.toString()+num2.toString();
    }
}

let answer1 = combine(25,65,"as-number");
let answer2 = combine(35,"10","as-number");
let answer3 = combine('Radha'," Maiya","as-string");
let answer4 = combine(85,45,"as-string");

console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);
*/

//& --------------------------- Alias Types/Custom Types -------------------------------------------------------

/*
type combinable = string | number;

//$ The char variable only accept two data types one is string and second one is number.
const char1:combinable = "Hello";
const char2:combinable = 25;

//& const char3:combinable = true; This will show an error because variable storing boolean instead of string (or) number
*/

/*
type condition = number | string;
type conversionType = "as-number" | "as-string";
function combine(num1:condition,num2:condition,conversionType:conversionType){
    if(typeof num1==="number" && typeof num2==="number" || conversionType==="as-number"){
        return +num1 + +num2;
    } else {
        return num1.toString()+num2.toString();
    }
}

let answer1 = combine(10,20,"as-number");
let answer2 = combine(10,"20","as-number");
let answer3 = combine("Radha"," Krishna","as-string");

console.log(answer1);
console.log(answer2);
console.log(answer3);
*/

type combinable = string | number;

function combine(num1:combinable,num2:combinable){
    if(num1==="number" && num2==="number"){
        return +num1 + +num2
    } else if(num2==="string" && num2==="string"){
        return num1.toString() + num2.toString();
    } else {
        return num1.toString() + num2.toString();
    }
}

let answer1 = combine(5,6);
let answer2 = combine("Sita","Ram");
let answer3 = combine("Jai Shree Ram",108);
let answer4 = combine(108,"Radha");

console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);