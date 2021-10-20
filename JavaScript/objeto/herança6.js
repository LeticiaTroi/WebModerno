function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// Simulando o new
function novo(f, ...params) {
    const obj = {}  // usei notação literal de objs
    obj.__proto__ = f.prototype  // associei o protótipo desse obj ao attr prototype da função
    f.apply(obj, params)  // 
    return obj

}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)