// Novo Recurso 2015

const pessoa1 = {
    nome: 'Ana',
    idade: 18 ,
    endereco: {
        logradouro: 'Rua ABC' ,
        numero: 1000
    }
}

const pessoa2 = {
    nome2: 'Júlia',
    idade2: 24,
    endereco2: {
        logradouro: 'Rua 123',
        numero: 152
    }
}

const { nome, idade } = pessoa1  // {operador destructuring}
console.log(nome, idade)

const { nome: n, idade: i } = pessoa1
console.log(n, i)

const { endereco2: {logradouro, numero, cep}, nome2 } = pessoa2
console.log(nome2, idade, logradouro, numero, cep)   // cep = undefined

const { sobrenome, bemHumorada = true } = pessoa1
console.log(sobrenome, bemHumorada)   // undefined, true