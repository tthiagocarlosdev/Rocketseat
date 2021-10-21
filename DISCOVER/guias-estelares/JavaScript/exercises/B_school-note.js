/*
### transformar notas escolares
Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C
* de 90 para cima   - A
* entre 80 - 89     - B
* entre 70 - 79     - C
* entre 60 - 69     - D
* menor que 60      - F
*/

function getNote(note){
let final_note;
let noteA = note >= 90 && note <= 100;
let noteB = note >=80 && note < 90;
let noteC = note >= 70 && note < 80;
let noteD = note >= 60 && note < 70;
let noteF = note < 60 && note >= 0;
if (noteA){
    final_note = 'A'
} else if (noteB){
    final_note = 'B'
} else if (noteC){
    final_note = 'C'
}else if (noteD){
    final_note = 'D'
} else if (noteF){
    final_note = 'F'
} else {
    final_note = 'Nota inválida'
}
return final_note
}

console.log('nota final: '+getNote(0))
console.log('nota final: '+getNote(59))
console.log('nota final: '+getNote(60))
console.log('nota final: '+getNote(69))
console.log('nota final: '+getNote(70))
console.log('nota final: '+getNote(75))
console.log('nota final: '+getNote(79))
console.log('nota final: '+getNote(80))
console.log('nota final: '+getNote(85))
console.log('nota final: '+getNote(89))
console.log('nota final: '+getNote(90))
console.log('nota final: '+getNote(95))
console.log('nota final: '+getNote(100))
console.log('nota final: '+getNote(101))
console.log('nota final: '+getNote(-1))