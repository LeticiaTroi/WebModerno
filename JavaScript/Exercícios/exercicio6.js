function jurosSimples (C, i, t) {
    return  C + (C * i * t)
  
}
function jurosCompostos (C, i, t){
    return C * (1 + i)** t
}

console.log(jurosSimples(500, 5/100, 20))
console.log(jurosCompostos(100, 10/100, 2))