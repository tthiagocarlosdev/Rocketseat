const usuarios = [
  {nome: 'Thiago', tecnologias: ['HTML', 'CSS']},
  {nome: 'Kayo', tecnologias: ['JavaScript', 'CSS']},
  {nome: 'Lais', tecnologias: ['HTML', 'Node.js']}
]

function mostraListaUsuarios(array){
  for(i = 0; i < array.length; i++) {
    console.log(`${array[i].nome} trabalha com ${array[i].tecnologias}`)
  }
}

mostraListaUsuarios(usuarios)
console.log('')
function usuarioTrabalhaComCSS(usuario){
  for(i = 0; i < usuarios.length; i++){
    if(usuario[i].tecnologias.includes('CSS')) {
      console.log(`O usuário: ${usuario[i].nome} trabalha com CSS!`)
    }
  }
}

usuarioTrabalhaComCSS(usuarios)