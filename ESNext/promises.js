function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)  //aceita apenas 1 parâmetro!!!
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
.then(frase => frase.concat('?!?!'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log) // usar a função catch para tratar um erro (reject no lugar de resolve)