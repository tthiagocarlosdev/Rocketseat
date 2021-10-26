// Criar um programa que calcula a média
// das notas entre alunos e envia
// mensagem do cálculo da média.
/*
const aluno01 = 'Thiago'
const notaAluno01 = 9.8

const aluno02 = 'Carlos'
const notaAluno02 = 10

const aluno03 = 'Fulano'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
  console.log(`A média foi de ${media}. Parabéns!`)
} else {
  console.log(`A média é menor que 5!`)
}

console.log( 5 > 4 ) //true
console.log( 5 < 4 ) // false
console.log( 5 >= 4 ) // true
console.log( 4 <= 4 ) // true
console.log( 4 == "4" ) //true
console.log( 4 === "4" ) // false
console.log( 4 != "5" ) // true
console.log( 4 !== "5" ) // true

// verificar se a pessoa é maior igual a 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
// se a pessoa tiver 17 anos, avisar para voltar quando fizer 18 anos

const idade = 16
if(!(idade >= 18) || (idade === 17)){
  console.log(`Entrada bloqueada!`)
} else {
  console.log(`Deixar entrar!`)
}

console.log( 5 == 5 && 6 == 6 ) // true
console.log( 5 == 5 && 6 != 6 ) // false

console.log( 5 == 5 || 6 == 6 ) // true
console.log( 5 == 5 || 6 != 6 ) // true

console.log( !(5 > 6) ) // true
console.log( !(5 < 6) ) // false

console.log( 2 * 2) // 4
console.log( 2 / 2) // 1
console.log( 2 % 1.5) // 0.5
console.log( 2 + 2) // 4
console.log( 2 - 2) // 0


const aluno01 = {
  nome: 'Thiago',
  nota: 9.8
}

const aluno02 = {
  nome: 'Carlos',
  nota: 10
}

const aluno03 = {
  nome: 'Fulano',
  nota: 2
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

console.log(`Media: ${media.toFixed(2)}`)
console.log(aluno01)


const alunos = [
  {
    nome: 'Thiago',
    nota: 9.8
  },
  {
    nome: 'Carlos',
    nota: 10
  },
  {
    nome: 'Fulano',
    nota: 2
  }
]
const nomeDeAlunos = ['Thiago', 'Carlos', 'Fulano']
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
console.log(nomeDeAlunos)
console.log(alunos)
console.log(media.toFixed(2))
*/

// Criar um programa que calcula a média das turmas de alunos
// e envia mensagem do cálculo da média.

const alunosDaTurmaA = [
  {
    nome: 'Thiago',
    nota: 1.8
  },
  {
    nome: 'Carlos',
    nota: 10
  },
  {
    nome: 'Fulano',
    nota: 2
  },
  {
    nome: 'Outro aluno',
    nota: 10
  }
]
const alunosDaTurmaB = [
  {
    nome: 'Silva',
    nota: 10
  },
  {
    nome: 'Robson',
    nota: 10
  },
  {
    nome: 'Ciclano',
    nota: 0
  },
  {
    nome: 'Novo Aluno',
    nota: 5
  }
]

function calculaMedia(alunos){
  let soma = 0
  for(let i = 0; i < alunos.length; i++){
    soma = soma + alunos[i].nota
  }

  const media = soma / alunos.length
  return media
}


const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma){
  if (media > 5) {
    console.log(`A media da turma ${turma} foi de ${media}. Parabéns!`)
  } else {
    console.log(`A media da turma ${turma} é menor que 5!`)
  }
}

console.log(enviaMensagem(media1, 'turmaA'))
console.log(enviaMensagem(media2, 'turmaB'))