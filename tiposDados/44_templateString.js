const nome = 'Rebeca'
const concatenacao = 'óla' + nome + '!'
const template = `
    Óla
    ${nome}
`
console.log(concatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)