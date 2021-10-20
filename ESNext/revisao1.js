// let e const
{
    var a = 2
    let b = 3 
    console.log(b) //assim funciona!!
}
console.log(a)
//console.log(b) // variavel b não esta definida dentro deste escopo

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`) // const interpolada a string graças ao template string

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e , tras)

const [x, y] = [1, 2, 3] // 3 é ignorado
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)