function teste1(num) {
    if(num > 7)
    console.log(num)
    console.log('Final') // não tem ligação com o if
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7) ; {  // não utilizar o ';' com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)