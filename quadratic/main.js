const a = +prompt("Введите  коэффициент старшей стпени, а = ");
const b = +prompt("Введите  коэффициент первой стпени со знаком, b = ");
const c = +prompt("Введите  коэффициент свободного члена со знаком, с = ");

function quadraticEquation(a, b, c) {

    const D = (b**2) - (4 * a * c) 
    const node1 = (-b + D**(1/2) )/(2 * a);
    const node2 = (-b - D**(1/2) )/(2 * a);
  

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