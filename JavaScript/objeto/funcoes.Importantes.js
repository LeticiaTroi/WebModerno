const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {  // 1° maneira (de percorrer um array)
    console.log(`${e[0]}: ${e[1]}`)     // DESTRUCTURING
    

Object.entries(pessoa).forEach(([chave, valor]) => {  // 2° maneira (de percorrer um array)
    console.log(`${chave}: ${valor}`)   // DESTRUCTURING
})
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,  // Listável? : Sim
    writable: false,  // Modificável? : Sim
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // não vai variar pois writable esta false 
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)

const destino = { a: 1 }
const o1 = { b: 2}
const o2 = { c:3, a: 4} 
const obj = Object.assign(destino, o1, o2)  // o2 irá sobrescrever o o1 (a)

Object.freeze(obj)
obj.c = 1234
console.log(obj)