const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c:c } // modo antigo
const obj2 = {a, b, c}  // modo novo
console.log(obj1, obj2)

const nomeAttr = 'nota'
const ValorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = ValorAttr  // modo antigo
console.log(obj3)

const obj4 = {[nomeAttr] : ValorAttr}  // modo novo
console.log(obj4)

const obj5 = {
    funcao1: function () {  // modo antigo
        // ...
    },
    funcao2() {   // modo novo (reduzida)
        // ...
    }
}

console.log(obj5)