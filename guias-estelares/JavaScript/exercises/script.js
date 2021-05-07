/* ### Distema de gastos familiar
Crie um objeto que possuiŕa 2 propiedades, ambas do tipo array:
    * receitas: []
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.
*/
let gastoFamiliar = {
    receita: [salario=1000, rendaExtra=2000,],
    despesa: [agua=100.59, aluguel=1000.43, luz=500.37, internet=80],
}
// receitas
function sum(array){
    let total = 0;
    for(let value of array){
        total += value
    }
    return total
}


//resultado final e status saldo
function calculateBalance(){
    const totalReceita = sum(gastoFamiliar.receita)
    const totalDespesa = sum(gastoFamiliar.despesa)
    
    const balance = totalReceita - totalDespesa
    
    saldo = "Saldo negativo";
    if(balance >=0){
        saldo = "Saldo positivo"
    }
    console.log(saldo+" - R$"+balance.toFixed(2))
}
calculateBalance()
