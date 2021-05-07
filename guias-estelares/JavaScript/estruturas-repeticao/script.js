//Estrutura de repetição
// for...in
let person = {
    name: 'Thiago',
    age: 33,
    weight: 92.2,
}
for (let property in person){
    console.log(property)
    console.log(person[property])
}