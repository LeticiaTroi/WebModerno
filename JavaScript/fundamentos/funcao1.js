// Função sem retorno
function imprimirSoma(a, b) {
    console.log( a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)  // NaN pois, a=2 e b= undefined 
imprimirSoma(2, 10, 4 ,5, 6, 7, 8) // soma apenas o 2 com o 10, desconsiderando os outros númros
imprimirSoma()  // NaN pois, está vazio

// Função com retorno
function soma(a, b = 0) {   //valor de b já definido como 0
    return a + b
}

console.log(soma(2, 3)) // 2 + 3 = 5
console.log(soma(2)) // 2 + 0 = 2 (valor pré definido de b)