//! In this we are going to read about data types such as Object, Array, Tuples, Enum
//& -------------------------- Object --------------------------------------------------------------------------
/*
let obj :{
    name:string,
    age:number,
    city:string
} = {
    name:"Sidharth Singh",
    age:22,
    city:"BLR"
};

obj.age = "Hello"
console.log(obj.age);
*/
/*
let obj :{
    name:string,age:number,city:string,skills:string[]
} = {
    name:"Sidharth Singh",
    age:22,
    city:"BLR",
    skills:["Html","CSS","JS","MERN"]
}

console.log(obj.skills[2]);
*/
/*
let obj:{
    name:string,
    age:number,
    city:string,
    skills:string[],
    marks:number[]
} = {
    name:"Sidharth Singh",
    age:22,
    city:"BLR",
    skills:["HTML","CSS","JS","MERN"],
    marks:[58,58,60,59]
}

obj.marks[1] = 59
console.log(obj.marks);
*/
//& -------------------------- Array --------------------------------------------------------------------------
// let languages:string[];
/*
let languages:any[];  //--> If you use any[] then you will lose the power of TypeScript.
languages = ["Javascript","Java","Python","C++",true];
languages[1]=25
console.log(languages);
*/
//& --------------------------- Tuples ------------------------------------------------------------------------
/*
let person : {
    name:string,
    age:number,
    skills:[string,string,string,string,string,number] //^ Fixed array of different data types. For Ex: 0--> String, 5--> number
} = {
    name:"Gabbar Singh",
    age:25,
    skills:["10","HTML","CSS","JS","MERN",25]
};

person.skills[0] = "Job"
// person.skills = ["10","HTML","CSS","JS","MERN",25,35];

console.log(person);
*/
//& ------------------------ ENUM ------------------------------------------------------------------------------
// enum role {author,admin,user}
// let obj = {
//     name:"Sidharth Singh",
//     age:22,
//     skills:["React","Typescript"],
//     role:role.user
// };
// if(obj.role===role.author){
//     console.log("Author");
// } else if(obj.role===role.admin){
//     console.log("Admin");
// } else{
//     console.log("User");
// }
var role;
(function (role) {
    role[role["user"] = 0] = "user";
    role[role["admin"] = 1] = "admin";
    role[role["author"] = 2] = "author";
    role[role["head"] = 3] = "head";
})(role || (role = {}));
var person = {
    name: "Sidharth Singh",
    age: 22,
    skills: ["React", "MongoDB"],
    Role: role.user
};
if (person.Role === role.head) {
    console.log("Head");
}
else if (person.Role === role.admin) {
    console.log("Admin");
}
else if (person.Role === role.author) {
    console.log("Author");
}
else {
    console.log("User are a normal user");
}
