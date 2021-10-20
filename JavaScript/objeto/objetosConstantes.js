// pessoa -> 123 {...} 
// 123 = endereço de memória (ñ pode alterar)
/// {...} = objeto q existe no endereço (pd alterar)
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana}

Object.freeze(pessoa) // Não permite alterações após esta definição!!!

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)
 

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome ='Maria'
console.log(pessoaConstante)
