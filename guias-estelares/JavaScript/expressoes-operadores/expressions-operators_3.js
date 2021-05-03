/*
    Operadores unários
    typeof - define o tipo de objeto.
    delete - procura uma propriedade dentro de um objeto e vai deletar aquela propriedade de dentro do objeto.
*/
console.log(typeof "Thiago")
const person = {
    name: 'Carlos',
    age: 33,
}
console.log(person)
delete person.age
console.log(person)

