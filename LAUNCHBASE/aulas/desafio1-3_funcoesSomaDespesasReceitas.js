const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

const saldo = []
const totalReceita = []
const totalDespesas = []

for(let i = 0; i < usuarios.length; i++){
  console.log(usuarios[i].nome)
  totalReceita[i] = somaNumeros(usuarios[i].receitas)
  totalDespesas[i] = somaNumeros(usuarios[i].despesas)
  saldo[i] = calculaSaldo(totalReceita[i], totalDespesas[i])
  console.log(`A receita de ${usuarios[i].nome} é igual a ${somaNumeros(usuarios[i].receitas)}`)
  console.log(`A despesa de ${usuarios[i].nome} é igual a ${somaNumeros(usuarios[i].despesa)}`)
  console.log(`O saldo de ${usuarios[i]} é igual a ${saldo[i]}`)
}

function calculaSaldo(receita, despesa){
  return receita - despesa
}

function somaNumeros(array){
  let somaNumeros = 0
  for(let i = 0; i < array.length; i++) {
    somaNumeros += array[i]
  }
  return somaNumeros.toFixed(2)
}




/*

for(let i = 0; i < usuarios.length; i++){
  totalReceita[i] = somaNumeros(usuarios[i].receitas)
  totalDespesas[i] = somaNumeros(usuarios[i].despesas)
}


function somaNumeros(array){
  let somaNumeros = 0
  for(let i = 0; i < array.length; i++) {
    somaNumeros += array[i]
  }
  return somaNumeros.toFixed(2)
}



console.log(totalReceita)
console.log(totalDespesas)

saldo = []
for(let i = 0; i < usuarios.length; i++){
  totalReceita[i] = somaNumeros(usuarios[i].receitas)
  totalDespesas[i] = somaNumeros(usuarios[i].despesas)
  saldo[i] = calculaSaldo(totalReceita, totalDespesas)
  console.log(saldo[i])
}




console.log('')
for(let i = 0; i < usuarios.length; i++){
  console.log(`A receita de ${usuarios[i].nome} é igual a ${somaNumeros(usuarios[i].receitas)}`)
}
console.log(somaArray(usuarios[0].receitas))
console.log(somaArray(usuarios[0].despesas))
console.log(usuarios[0].receitas.length)
console.log(usuarios[0].receitas[0])
console.log(usuarios[0].receitas[1])
console.log(usuarios[0].receitas[2])
console.log(usuarios[0].receitas[3])
*/