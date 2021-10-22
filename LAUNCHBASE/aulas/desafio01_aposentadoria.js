const nome = 'Thiago Carlos'
const sexo = 'F'
const idade = 54
const contribuicao = 30
const calculoContribuicao = contribuicao + idade
let mensagem = ``

const aposentadoriaHomem = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const aposentadoriaMulher = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if(aposentadoriaHomem || aposentadoriaMulher){
  mensagem = `${nome} você pode se aposentar!`
} else {
  mensagem = `${nome} você não pode se aposentar!`
}

console.log(mensagem)