class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    Falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.Falar()


//////////////////////////////////////////////////////////////////


const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Letícia')
p2.falar()