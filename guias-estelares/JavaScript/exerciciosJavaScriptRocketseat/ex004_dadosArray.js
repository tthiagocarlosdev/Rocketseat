var input = require('readline-sync')

//funções
function header(){
    console.log('===========================')
    console.log('     ex004_dadosArray      ')
    console.log('===========================')
}

function menu(){
    console.log('Menu')
    console.log('[1] nº Categorias')
    return input.question('')
}

function simOuNao(){
    console.log('Deseja continuar?')
    console.log('[1] Sim')
    console.log('[2] Não')
    return input.question('')
}

//variáveis
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os sete hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]
/*
do {
    header()
    escolha = Number(menu())
    console.clear()
    header()
    if(escolha == 1){
        console.log(`Quantidade de Categorias: ${booksByCategory.length}`)
    }
    console.log('---------------------------')
    continuar = simOuNao()
    console.clear()
} while (continuar < 2)
*/
console.log(booksByCategory[0].books.length)

header()
console.log('Programa Finalizado!')
console.log('===========================')