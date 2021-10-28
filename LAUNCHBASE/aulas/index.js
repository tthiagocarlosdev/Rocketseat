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


// Criar um programa que calcula a média das turmas de alunos
// e envia mensagem do cálculo da média.

const classA = [
  {
    name: 'Thiago',
    grade: 1.8
  },
  {
    name: 'Carlos',
    grade: 10
  },
  {
    name: 'Fulano',
    grade: 2
  },
  {
    name: 'Outro student',
    grade: 10
  }
]
const classB = [
  {
    name: 'Silva',
    grade: 10
  },
  {
    name: 'Robson',
    grade: 10
  },
  {
    name: 'Ciclano',
    grade: 0
  },
  {
    name: 'Novo Aluno',
    grade: 5
  }
]

function calculateAverage(students){
  let sum = 0
  
  for(let i = 0; i < students.length; i++){
    sum = sum + students[i].grade
  }

  const average = sum / students.length

  return average
}

function sendMessage(average, turma){
  
  if (average > 5) {
    console.log(`${turma} average: ${average}. Congratulations!`)
  } else {
    console.log(`${turma} average: ${average}. Is not good!`)
  }
}

function markAsFlunked(student) {
    student.flunked = false
    
    if (student.grade < 5){
      student.flunked = true
    }
}

function sendFlunkedMessage(student){
  
  if(student.flunked){
    console.log(`${student.name} flunked!`)
  }
}

function studentReprovados(students){
  
  for(let student of students){
    markAsFlunked(student)
    sendFlunkedMessage(student)
  }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentReprovados(classA)
studentReprovados(classB)
*/



