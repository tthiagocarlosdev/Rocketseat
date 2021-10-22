const nome = 'Thiago Carlos'
const peso = 92
const altura = 1.86
let mensagem = ``
let imc = (peso / (altura * altura))
if(imc >= 30){
  mensagem = `${nome} você está acima do peso!`
} else {
  mensagem = `${nome} você não está acima do peso!`
}
console.log(mensagem)