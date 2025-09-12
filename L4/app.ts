console.log("Hello Bhagwaan ji Mata ji");

// & -------------------- Function Return Type ---------------------------------------------------------------
// function add(num1:number,num2:number):number{
//     return num1 + num2;
// }

// console.log(add(58,50));

// function greet(name:string):void{
//     console.log(`Hi, ${name}`);
// }

// greet("SitaRam");

// //! Bad Practice
// // let combineFunction : Function;
// // // combineFunction = "Ram"  //Invalid
// // // combineFunction = 10  //Invalid
// // combineFunction = add;
// // // combineFunction = greet;

// // console.log(combineFunction(100,200));

// //! Good Practice
// let combineFunction : (a:number,b:number) => number
// combineFunction = add
// console.log(combineFunction(1,2))

// //& ----------------------- Function Types & Callbacks -----------------------------------------------------
// type cb = (n:number) => void;
// function addHandle(a:number,b:number,cb:cb){
//     let result = a+b;
//     cb(result);
// }

// addHandle(25,91,(result)=>{
//     console.log(result)
// })
type cb = (n:number)=>void
function addHandle(a:number,b:number,cb:cb){
    let result = a + b;
    cb(result);
}

// addHandle(25,89,(result)=>{
//     console.log(result);
// })

addHandle(25,54,(result)=>{
    console.log(result);
})