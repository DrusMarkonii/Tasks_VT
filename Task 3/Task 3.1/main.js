function counter() {
    let count = 1;
    return function() {
        return count++;
    }
}

let func = counter()

console.log(func())
console.log(func())
console.log(func())
console.log(func())