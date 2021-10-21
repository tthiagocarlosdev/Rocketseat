
// Exercício:
// 1. Declare uma variável de nome weight
/*
let weight;

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight)
*/
/*
    3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * weight; Number (float)
    * isSubscribed: Boolean
*/

/*
    let name = 'Thiago Carlos'
    let age = 33
    let weight = 92.1
    let isSubscribed = true
*/
    //4. A variável student abaixo é de que tipo de dados?
    //4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
    //4.2 Mostre no console a seguinte mensagem:
    //<name> de idade <age> pesa <weight> kg.
    // Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.

    let student = {
        name: 'Thiago Carlos',
        age: 33,
        weight: 92.1,
        isSubscribed: true,
    };
 /*  
    console.log(typeof student)
    console.log(student)

    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)
*/
    // 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.

    //let students=[]

    // 6. Reatribua valor a variável acima colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele ao Array)
    let students = [
        student
    ]

    // 7. Coloque no console o valor da posição zero do Array acima.

//    console.log(students[0])

    // 8. Crie um novo student e coloque na posição 1 do Array students
    let student2 = {
        name: 'Limeira',
        age: 21,
        weight: 50
    }

    students[1] = student2
/*
    console.log(students)
    console.log(students[0])
    console.log(students[1])
*/
    // 9. Sem rodar o código responda qual é a resposta do código e porque? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1