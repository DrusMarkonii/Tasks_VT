
let pow = a => {
    return function (b) {
        return a * a**(b-1)
    }
}

let calculate = a => char => b => {
    switch(char) {
        case "+": return a + b; break;
        case "-": return a - b; break;
        case "*": return a * b; break;
        case "/": return a / b; break;
        default: alert('Введите знак для calculate ')
    }

    
    // if (char == "+") return a + b;
    // if (char == "-") return a - b;
    // if (char == "*") return a * b;
    // if (char == "/") return a / b;


}

console.log(pow(-2)(3))
console.log(pow(4)(2))
console.log(pow(16)(0))
console.log(calculate(1)('+')(2))
console.log(calculate(8)('-')(2))
console.log(calculate(3)('*')(7))
console.log(calculate(15)('/')(3))
console.log(calculate(15)()(3))