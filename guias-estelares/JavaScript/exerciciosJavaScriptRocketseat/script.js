var readlineSync = require('readline-sync')
// Comentários
//Aqui eu tenho um comentário em linha
/*
Aqui eu tenho um comentário multi linha (bloco)

o código abaixo escreve alguma mensagem no devtools
*/
/*
console.log('Bem vindos ao Starter!!') //algum cometário console.log('iria ignorar')
console.log('não iria ignorar')

// Objetos
console.log({
	name: "Thiago",
	idade: 33,
	andar: function(){
		console.log('andar')
	}
})


console.log(["Thiago", 33])
console.log([
	"leite",
	"ovos",
	2,
	3,
])

// FUNCTIONS 

function createPhrases(){
	console.log('Estudar é muito bom')
	console.log('Paciência e persistência')
	console.log('Revisão é a mãe do aprendizado')
}
createPhrases()
createPhrases()
createPhrases()
console.log('fim do programa')

const sum = function(number1, number2){
	console.log(number1 + number2)
}

sum(2, 3) 
sum(10, 100)



const sayMyName = (name) => {
    alert(`Your name is ${name}`)
    
} 

const name = prompt('What is your name? ')

sayMyName(name)


let word = 'constitucionalissimamente'
let newArray = Array.from(word)
console.log(word)
console.log(newArray)


console.log(typeof "Thiago")
const person = {
	name: 'Carlos',
	age: 33,
}
console.log(person)
delete person.age
console.log(person)

// Grouping operator

let total = 2 + 3 * 5
console.log(total)
let total2 = ((2 + 3) * 5)
console.log(total2)


// Operadores de comparação

let one = 1
let two = 2
// igual a ==
console.log( two == 1)
console.log( one == "1")
// diferente de !=
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

// Operadores de comparação estritamente

let one = 1
let two = 2
// estritamente igual a ==
console.log( one === 1)
console.log( one === "1")
// estritamente diferente de !=
console.log(two !== "2")
console.log(two !== 2)

// Operadores de comparação maior e menor(igual)

let one = 1
let two = 2
// > Maior que
console.log(one > two)
// >= Maior igual a 
console.log(one >= 1)
console.log(two >= 1)
// < Menor que
console.log(one < two)
// Menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

// Operadores lógicos

let pao = true
let queijo = true
// AND &&
console.log(pao && queijo)
// OR ||
console.log(pao || queijo)
// NOT !
console.log(!pao)

// Operadores condicional ternário

let pao = true
let queijo = false
const niceBreakfast = pao && queijo ? "Café top" : "Café ruim"
console.log(niceBreakfast)
const niceBreakfast2 = pao || queijo ? "Café top" : "Café ruim"
console.log(niceBreakfast2)
// Maior 18
let age = 18
const canDrive = age >= 18 ? "Can Drive" : "Can't Drive"
console.log(canDrive)

// if ...else
let temperature = 36
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >=37
if (highTemperature){
	console.log('Febre alta')
} else if (mediumTemperature){
	console.log('Febre moderada')
} else {
	console.log('Saudável')
}

function operador(){
	console.log('[+]')
	console.log('[-]')
	console.log('[*]')
	console.log('[/]')
}

function calculate (number1, operator, number2){
	let result = 0;
	switch(operator){
		case '+':
			result = number1 + number2
			break
		case '-':
			result = number1 - number2
			break
		case '*':
			result = number1 * number2
			break
		case '/':
			result = number1 / number2
			break
		default:
			console.log('não implementado')
			break
	}
		return result
	}

	let valor1 = Number(readlineSync.question("Informe um valor: "))
	operador()
	let operando = readlineSync.question("escolha o Operador: ")
	let valor2 = Number(readlineSync.question("Informe outro valor: "))
	console.log(`Resultado da Operação: ${calculate(valor1, operando, valor2)}`)
	*/

let name = 'Thiago'
let names = ['Pedro', 'Thiago', 'João']
for (let char of name){
	console.log(char)
}
for (let name of names){
	console.log(name)
}