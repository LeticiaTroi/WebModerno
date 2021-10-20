const escola = "Cod3r" //indíces de Cod3r: 0,1,2,3,4

console.log(escola.charAt(4)) // pega um caractere dentro da string (4° caractere = r)
console.log(escola.charCodeAt(3)) // acha o código daquele caractere (caractere 3 = código '51')
console.log(escola.indexOf('3')) // índice do caractere escolhido (caractere 3 = índice 3)

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola ' .concat(escola).concat("!")) //concatenação = unir objetos em string ou array
console.log('Escola ' + escola + "!")  // concatenação com o uso do +
console.log(escola.replace(3, "e"))

console.log('Ana,Maria,Pedro'.split(',')) //gerou um array com 3 elementos independentes

