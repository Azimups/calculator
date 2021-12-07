    let num1 = parseInt(prompt("Enter first number number"));
    let num2 = parseInt(prompt("Enter second number number"));
    let op = prompt("Enter operator");
function calc(num1,num2,op){
    switch (op) {
        case "+":
            return num1+num2;
            break;
        case "-":
            return num1-num2;
            break;
        case "/":
            return num1/num2;
            break;
        case "*":
            return num1*num2;     
    }
}
console.log(calc(num1,num2,op));