function add(num1:number,num2:number,condition:boolean,messages:string){
    if(condition){
        return num1+num2;
    } else {
        return messages;
    }
}

const answer = add(4,5,false,"Something went wrong mere bhai!");
console.log(answer);