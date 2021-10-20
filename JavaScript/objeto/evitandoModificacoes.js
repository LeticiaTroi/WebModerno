// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.29, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'  // permite alteração do nome
produto.descricao = 'Borracha escolar branca'  // NÃO permite adicionar propriedades
delete produto.tag  // permite deletar
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado'), Object.isSealed(pessoa)

pessoa.sobrenome = 'Silva'  // NÃO permite adicionar o sobrenome
delete pessoa.nome  // NÃO permite deletar
pessoa.idade = 29  // permite alterar a idade
console.log(pessoa)