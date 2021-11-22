
const POW = a => {
    return function (b) {
        const RESULT = a * a**(b-1);

        console.log(RESULT)
    }
}

const CALCULATE = a => char => b => {
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

POW(4)(2)
POW(16)(0)
CALCULATE(1)('+')(2)
CALCULATE(8)('-')(2)
CALCULATE(3)('*')(7)
CALCULATE(15)('/')(3)
CALCULATE(15)()(3)