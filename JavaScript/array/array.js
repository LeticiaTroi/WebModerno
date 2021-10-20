console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //retorna undefined ao invés de dar erro (normal em JS)

aprovados [3] = 'Paulo' //método mais comum para substituir o dado de um array
aprovados.push('Abia') //método mais comum de se adicionar um dado no array :)
console.log(aprovados.length)

aprovados [9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)  

console.log(aprovados)  // 4 elementos undefined

aprovados.sort()  // altera a ordem dos dados do array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // 1° Param = índice, 2°Param = elementos q quero excluir a partir daquele índice,
console.log(aprovados)                           // 3° Param = quantos elemento quero adicionar naquele índice