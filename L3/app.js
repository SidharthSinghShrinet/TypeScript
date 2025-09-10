// // console.log("Hello World....");
function combine(num1, num2, conversionType) {
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        return +num1 + +num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}
var answer1 = combine(10, 20, "as-number");
var answer2 = combine(10, "20", "as-number");
var answer3 = combine("Radha", " Krishna", "as-string");
console.log(answer1);
console.log(answer2);
console.log(answer3);
