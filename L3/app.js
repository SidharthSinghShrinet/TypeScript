// // console.log("Hello World....");
function combine(num1, num2) {
    if (num1 === "number" && num2 === "number") {
        return +num1 + +num2;
    }
    else if (num2 === "string" && num2 === "string") {
        return num1.toString() + num2.toString();
    }
    else {
        return num1.toString() + num2.toString();
    }
}
var answer1 = combine(5, 6);
var answer2 = combine("Sita", "Ram");
var answer3 = combine("Jai Shree Ram", 108);
var answer4 = combine(108, "Radha");
console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);
