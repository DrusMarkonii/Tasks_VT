
const pow = a => {
    return function (b) {
        const result = a * a**(b-1);

        console.log(result)
    }
}

const calculate = a => char => b => {
    switch(char) {
        case "+": console.log(a + b); break;
        case "-": console.log(a - b); break;
        case "*": console.log(a * b); break;
        case "/": console.log(a / b); break;
        default: console.log(`Укажите херактер вычисления`)
    }

    
    // if (char == "+") return a + b;
    // if (char == "-") return a - b;
    // if (char == "*") return a * b;
    // if (char == "/") return a / b;


}

pow(4)(2)
pow(16)(0)
calculate(1)('+')(2)
calculate(8)('-')(2)
calculate(3)('*')(7)
calculate(15)('/')(3)
calculate(15)()(3)