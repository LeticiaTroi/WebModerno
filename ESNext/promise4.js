function gerarNumerosEntre(min, max, tempo) {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 5000),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 1500),
        gerarNumerosEntre(1, 60, 2500),
    ])
}

gerarVariosNumeros()
    .then(numeros => console.log(numeros)) // só vai aparecer quando todas as promises acontecerem