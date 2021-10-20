let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)  // numero = 2 (dentro do escopo)
}


console.log('fora =', numero) //numero = 1 (fora do escopo) global!!!

