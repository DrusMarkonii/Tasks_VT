let a = +prompt("Введите  коэффициент старшей стпени, а=");
let b = +prompt("Введите  коэффициент первой стпени, b=");
let c = +prompt("Введите  коэффициент свободного члена, с=");

function quadraticEquation(a, b, c){
    let D = (b**2) - (4*a*c) 
    // console.log("D=:", D**(1/2))
    let node1 = (-b + D**(1/2))/(2*a);
    let node2 = (-b - D**(1/2))/(2*a);
    // console.log("Корень 1:",node1)
    // console.log("Корень 2:",node2)
    if(isNaN(node1) || isNaN(node2)){
        alert('Не имеет вещественных коней')
    } else if(node2 === node1) {
        alert(`Единственный корень уравнения: ${node1}`)
    } else {
        alert(`
        x1= ${node1} \n 
        x2= ${node2}
        `)
    }
}
quadraticEquation(a, b, c)