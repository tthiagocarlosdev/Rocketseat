/* função de expressão regular para extrair apenas números de uma string.*/
function stringReplace(phrase){
    
    var n = phrase.replace(/[\W]/ig, '');
    var m = n.replace(/[a-z]/ig, '');
    return m;
}
const text = 'Expressões regulares em JavaScript na DevMedia é -50!'
console.log(stringReplace(text))

