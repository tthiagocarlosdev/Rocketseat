var input = require('readline-sync')

//functions
function header(){
    console.log('======================')
    console.log(' ex002_gastosFamiliar ')
    console.log('======================')
}

function subTitulo(titulo){
    console.log(`-----------------------`)
    console.log(`${titulo}`)
    console.log(`-----------------------`)
}

function menu(){
    console.log('Menu')
    console.log('[1] Receitas')
    console.log('[2] Despesas')
    console.log('[3] Finalizar')
    let menu = Number(input.question("Escolha uma opção: "))
    return menu
}

function soma(array){
    let total = 0
    for(let valor of array){
        total += valor
    }    
    return total
}

function imprimirLista(array1, array2){
    for(indice = 0; indice < array1.length; indice++){
        console.log(`Descrição: ${array1[indice]} - Valor: ${array2[indice].toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
    }
}

function saldoFinal(receitas, despesas){
    return receitas - despesas
}

function statusSaldo(saldo){
    if(saldo == 0){
        return `Zerado`
    } else if(saldo < 0){
        return `Negativo`
    } else {
        return `Positivo`
    }
}

//variaveis
let gastoFamiliar = {
    receitas: [],
    descricaoReceitas: [],
    despesas: [],
    descricaoDespesas: []
}

let totalReceitas = 0
let totalDespesas = 0
let saldo = 0

//inicio programa
do{
    header()
    opcao = menu()
    if(opcao == 1){        
        gastoFamiliar.descricaoReceitas.push(input.question("Descrição receita: "))
        gastoFamiliar.receitas.push(Number(input.question("Valor: ")))
    } else if (opcao == 2){
        gastoFamiliar.descricaoDespesas.push(input.question("Descrição Despesas: "))
        gastoFamiliar.despesas.push(Number(input.question("Valor: ")))
    }
    console.clear()
}while(opcao < 3)

//total receita
totalReceitas  = soma(gastoFamiliar.receitas) 
//total despesas
totalDespesas = soma(gastoFamiliar.despesas)
saldo = saldoFinal(totalReceitas, totalDespesas)

//imprimir
header()
console.log("Relatório Final")
subTitulo(`Lista de receitas`)
imprimirLista(gastoFamiliar.descricaoReceitas, gastoFamiliar.receitas)
subTitulo(`Lista de Despesas`)
imprimirLista(gastoFamiliar.descricaoDespesas, gastoFamiliar.despesas)
subTitulo(`Total!`)
console.log(`Total Receita: ${totalReceitas.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(`Total Despesas: ${totalDespesas.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(`Saldo: ${saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(`Status: ${statusSaldo(saldo)}!`)

console.log('======================')