const funcs = []

for (let i = 0; i < 10; i++) {  //let tem escopod e bloco
    funcs.push(function()  {
        console.log(i)
    })
}

funcs[2]() 
funcs[8]()