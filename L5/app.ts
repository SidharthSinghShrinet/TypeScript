console.log("Jai Shree Ram Jai Ho Sita Maiya ki");

//& ------------------- Unknown V/S Any ---------------------------------------------------------------------
//$ Before assigning the unknown variable we have to check the unknown variable type is same as another variable type or not.
//$ But in ANY, it does not the case -> You can assign the variable value to any variable 
let userInput : unknown;
let userName : any;

let acceptStr : string;
userInput = "gadari karbe";
userName = "Jagga Daku"

acceptStr = userName;


//& ---------------- Never ----------------------------------------------------------------------------------
//$ It is used when we don't know what the output is going to code  
function generateError(message:string,statusCode:number){
    throw {message:message,statusCode:statusCode};
}

generateError("Not Found!",404);

