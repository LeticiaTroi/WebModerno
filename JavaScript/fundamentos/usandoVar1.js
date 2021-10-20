{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)  // a variavél var ficará visivel mesmo fora do bloco (exceto em funções)



function teste() {
    var local = 123
    console.log(local)  //variável dentro do bloco de uma função = visível
}

teste()
console.log(local)  //variável fora do bloco da função = não deifinido