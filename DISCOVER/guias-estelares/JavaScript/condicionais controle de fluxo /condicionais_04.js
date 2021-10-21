// throw - disparar, lançar
function sayMyName(name = ''){
    if(name ===''){
        throw new Error ("Nome é obrigatório")
    }
    console.log(name)
}
// try(tentar) .. catch(pegar/capturar)
try{
    sayMyName('')
} catch (e){
    console.log(e)
}
console.log('após o try/catch')
