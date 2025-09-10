function add(num1, num2, condition, messages) {
    if (condition) {
        return num1 + num2;
    }
    else {
        return messages;
    }
}
var answer = add(4, 5, false, "Something went wrong mere bhai!");
console.log(answer);
