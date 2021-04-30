// function scope
let subject = 'math'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)