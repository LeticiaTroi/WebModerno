const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o último dado do array (Massa)
console.log(pilotos)

pilotos.push('Verstappen') //adiciona um dado no array
console.log(pilotos)

pilotos.shift() //remove o primeiro dado do array (Vettel)
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um dado no index 0 do array
console.log(pilotos)
  

//Splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'Botas', 'Massa') //adicionei no index 2 e não deletei ngm (0)
console.log(pilotos)

pilotos.splice(3, 1) // removeu o massa(a partir do indice 3 eu apaguei 1 dado)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)  // novo array do indice 1 ao 4 - exceto o 4 - 
console.log(algunsPilotos2)