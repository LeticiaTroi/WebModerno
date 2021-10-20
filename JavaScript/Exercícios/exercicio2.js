function classificacaoTriangulos (lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isóceles'
    }else {
        return 'Escaleno'
    }
}

console.log(classificacaoTriangulos(5, 5, 5))
console.log(classificacaoTriangulos(3, 3, 6))
console.log(classificacaoTriangulos(8, 5, 3))