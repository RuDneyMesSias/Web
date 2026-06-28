const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

/*
    * Var não ter escopo de bloco não guarda a memoria do array 
*/

funcs[2]()
funcs[8]()

const funcs2 = []

for (let i = 0; i < 10; i++) {
    funcs2.push(function () {
        console.log(i)
    })
}

/*
    * Let por ter escopo de bloco guarda a memoria do array 
*/

funcs2[2]()
funcs2[8]()