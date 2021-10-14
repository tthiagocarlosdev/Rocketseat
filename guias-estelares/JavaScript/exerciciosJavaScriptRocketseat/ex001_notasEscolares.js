var readlineSync = require('readline-sync')
function header(){
    console.log('======================')
    console.log(' ex001_notasEscolares ')
    console.log('======================')
}

function classificacaoNotas(nota){
    let E = nota > 0 && nota < 60
    let D = nota > 59 && nota < 70
    let C = nota > 69 && nota < 80
    let B = nota > 79 && nota < 90
    let A = nota > 89 && nota < 101

    if(E){
        return `E`
    } else if(D){
        return `D`
    } else if(C){
        return `C`
    } else if(B){
        return `B`
    } else if(A){
        return `A`
    } else {
        return `Nota Inválida!`
    }
}

header()
let nota = Number(readlineSync.question("Digite a nota: "))
console.clear()
header()
console.log(`Nota: ${nota}`)
console.log(`Classificação: ${classificacaoNotas(nota)}`)
console.log('======================')