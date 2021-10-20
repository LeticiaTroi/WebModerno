require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita' // não alterou por conta do freeze
console.log(MinhaApp.nome)