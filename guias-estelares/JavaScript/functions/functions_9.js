/*
    Function() constructor
    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + ' is walking'
    }
}
const thiago = new Person('Thiago')
const joao = new Person('Joao')
console.log(thiago.walk())
console.log(joao.walk())

let nickname = new String('limeira')
console.log(nickname)