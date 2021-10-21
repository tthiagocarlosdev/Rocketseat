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
    console.log('[3] Total de autores')
    console.log('[4] Livros por autor')
    console.log('[5] Finalizar programa!')
    return input.question('')
}

function simOuNao(){
    console.log('Deseja continuar?')
    console.log('[1] Sim')
    console.log('[2] Não')
    return input.question('')
}

function listaDeAutores(){
    let autores = []
    for(let categoria of booksByCategory){
        for(let livros of categoria.books){
            if(autores.includes(livros.author) == false){
                autores.push(livros.author)
            }
        }
    }
    return autores
}



function livrosDoAutor(autor){
    let livrosDoAutor = []
    for(let categoria of booksByCategory){
        for(let livros of categoria.books){
            if(livros.author.toUpperCase() === autor.toUpperCase()){
                livrosDoAutor.push(livros.title)
            }
        }
    }
    return livrosDoAutor
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

do {
    header()
    escolha = Number(menu())
    console.clear()
    header()
    switch(escolha){
        case 1:
            console.log(`Quantidade de Categorias: ${quantidadeCategorias}`)
            break
        case 2:
            for(let categoria of booksByCategory){
                console.log(`Total de livros da categoria ${categoria.category}: ${categoria.books.length}`)            
            }        
            break
        case 3:
            console.log(`Total de autores: ${listaDeAutores().length}`)
            break
        case 4:
            console.log(listaDeAutores())
            let escolhaAutor = input.question('Digite o nome do autor: ')
            console.clear()
            header()
            console.log(`Livros do autor ${escolhaAutor}: ${livrosDoAutor(escolhaAutor).join(', ')}`)
            break
    }

    console.log('---------------------------')
    continuar = simOuNao()
    console.clear()
} while (continuar < 2)

header()
console.log('Programa Finalizado!')
console.log('===========================')