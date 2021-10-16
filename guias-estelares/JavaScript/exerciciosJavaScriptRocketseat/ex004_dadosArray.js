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
    console.log('[2] nº de Livros p/ Categoria')
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
const quantidadeCategorias = booksByCategory.length
let quantlivrosTotal = 0
let quantAutoresTotal = 0

for(i = 0; i < quantidadeCategorias; i++){
    quantlivrosTotal += booksByCategory[i].books.length
}
console.log(`Nº Livros Totais: ${quantlivrosTotal}`)

for(i = 0; i < quantidadeCategorias; i++){
    quantAutoresTotal += booksByCategory[i].books[i].author.length
}
console.log(`Nº Autores Totais: ${quantAutoresTotal}`)

/*
do {
    header()
    escolha = Number(menu())
    console.clear()
    header()
    if(escolha == 1){
        console.log(`Quantidade de Categorias: ${quantidadeCategorias}`)
    } else if (escolha == 2){
        for(i = 0; i < quantidadeCategorias; i++) {
            let quantidadeLivrosPorCategoria = booksByCategory[i].books.length
            console.log(`Quantidade de livros na ${i+1}º Categoria: ${quantidadeLivrosPorCategoria}`)
        }
    }
    console.log('---------------------------')
    continuar = simOuNao()
    console.clear()
} while (continuar < 2)
*/
header()
console.log('Programa Finalizado!')
console.log('===========================')