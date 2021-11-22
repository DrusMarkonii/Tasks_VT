let a = +prompt("Введите  коэффициент старшей стпени, а = ");
let b = +prompt("Введите  коэффициент первой стпени, b = ");
let c = +prompt("Введите  коэффициент свободного члена, с = ");

function quadraticEquation(a, b, c) {

    let D = (b**2) - (4 * a * c) 
    let node1 = (-b + D**(1/2) )/(2 * a);
    let node2 = (-b - D**(1/2) )/(2 * a);
  

    if (isNaN(node1) || isNaN(node2)) {
        alert('Не имеет вещественных коней')
    } else if(node2 === node1) {
        alert(`Единственный корень уравнения: ${node1}`)
    } else {
        alert(`
        x1= ${node1}
        x2= ${node2}
        `)
    };
    
}
quadraticEquation(a, b, c)