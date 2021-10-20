let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log("!!3")
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log({})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) //apenas o ' ' será um valor verdadeiro

let nome = 'Lucas' // se essa string estivesse vazia, 'Desconhecido' seria imprimido no console
console.log(nome || 'Desconhecido')



