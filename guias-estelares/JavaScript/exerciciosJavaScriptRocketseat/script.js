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
*/

let word = 'constitucionalissimamente'
let newArray = Array.from(word)
console.log(word)
console.log(newArray)