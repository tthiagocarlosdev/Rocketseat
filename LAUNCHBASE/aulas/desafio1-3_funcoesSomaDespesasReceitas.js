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


for(let i = 0; i < usuarios.length; i++){
  const saldo = []
  const totalReceita = []
  const totalDespesas = []
  const statusFinal = []

  totalReceita[i] = somaNumeros(usuarios[i].receitas)
  totalDespesas[i] = somaNumeros(usuarios[i].despesas)
  saldo[i] = calculaSaldo(totalReceita[i], totalDespesas[i])
  statusFinal[i] = statusDoSaldo(saldo[i])

  //console.log(usuarios[i].nome)
  // console.log(`A despesa de ${usuarios[i].nome} é igual a ${somaNumeros(usuarios[i].despesas)}`)
  // console.log(`A receita de ${usuarios[i].nome} é igual a ${somaNumeros(usuarios[i].receitas)}`)
  console.log(`${usuarios[i].nome} possui saldo ${statusFinal[i]} de R$${saldo[i].replace('.', ',')}`)
}

function calculaSaldo(receita, despesa){
  return (receita - despesa).toFixed(2)
}

function somaNumeros(array){
  let somaNumeros = 0
  for(let i = 0; i < array.length; i++) {
    somaNumeros += array[i]
  }
  return somaNumeros.toFixed(2)
}

function statusDoSaldo(valor){
    if(valor == 0){
      return `ZERADO`
    } else if (valor < 0) {
      return `NEGATIVO`
    } else {
      return `POSITIVO`
    }
}

