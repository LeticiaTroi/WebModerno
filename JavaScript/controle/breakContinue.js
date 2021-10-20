const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) { 
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)  //quando chegar no 5 =, o laço é encerrado e acaba a repetição.
}
console.log('Fim do break')

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)  //quando chegar no 5 termina a iteração atual e se inicia uma nova repetição
    
}
console.log('fim do continue')

externo: for (a in nums) {   // externo = rótulo para qual bloco o break irá atuar 
    for (b in nums) {
        if(a ==2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}