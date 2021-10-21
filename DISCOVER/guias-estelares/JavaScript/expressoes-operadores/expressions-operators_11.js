// Operador Condicional (Ternário)
// Dependendo da condição, nós recebemos valores diferentes
// Condição então valor 1 se não valor 2
// condition ? value1 : value2
// Exemplos:
// Café da manhã top
let pao = false
let queijo = false

const niceBreakfast = pao && queijo ? "Café top" : "Café ruim"
console.log(niceBreakfast)
const niceBreakfast2 = pao || queijo ? "Café top" : "Café ruim"
console.log(niceBreakfast2)
// Maior 18
 let age = 18
 const canDrive = age >= 18 ? "Can Drive" : "Can't Drive"
 console.log(canDrive)
