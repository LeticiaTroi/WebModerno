const valor = 'Global'
function minhaFuncao () {
    console.log(valor)
}



function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // chamou onde a função 'minhaFuncao' foi originalmente escrita