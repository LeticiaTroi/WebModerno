const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) //index 0 e 4
console.log(valores[4]) // index não existe = undefined 

valores[4] = 10 //adicionou um elemento no array
console.log(valores)
console.log(valores.length) // quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.assert(typeof valores)