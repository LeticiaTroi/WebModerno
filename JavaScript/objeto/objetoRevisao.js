// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto'] 
console.log(produto)

const carro = {
    modelo: 'A4', // chave valor
    valor: 89.000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {  // chave e valor (valor = objeto com seus próprios valores e chaves)
            logradouro: 'Rua ABC',
            numero:123
        }
    },
    condutores: [{  // atributos com arrays
        nome:'Júnior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {  // função dentro de um objeto
        //...
    }

}

carro.proprietario.endereco.numero = 1000 // acessar os atributos através da notação ponto(.)
carro['proprietario']['endereco']['loradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) // undefined (ja foi definido)
console.log(carro.condutores.length) // dá erro!!! (nunca foi definido)