let valor // não inicializado = undefined
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString())  // Erro!

const produto = {}
console.log(produto.preco)  // undefined pq preço nao foi inicializado anteriormente 
console.log(produto)

produto.preco = 3.58
console.log(produto)

produto.preco = undefined  // evite atribuir undefined!!!
console.log(!!produto.preco)
//delete produto.preco
console.log = null // sem preço
console.log(!!produto.preco)
console.log(produto)
