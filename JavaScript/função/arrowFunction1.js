let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // return implícito
console.log(dobro(Math.PI))

let ola = function () {  // uma função com bloco sempre precia do return
    return 'Olá'
}

ola = () => 'Olá amigo'  // não possui parâmetro
ola = _ => 'Olá amigo'  // possui 1 parâmetro (_)
console.log(ola())