var input = require('readline-sync')
function header(){
    console.log('===========================')
    console.log(' ex003_celciusToFahrenheit ')
    console.log('===========================')
}

function celciusOrFahrenheit(temperatura){
    let celcius = temperatura.toUpperCase().includes('C')
    let fahrenheit = temperatura.toUpperCase().includes('F')
    // expressão regular
    let f = /F/gi
    let c = /C/gi

    if(fahrenheit){
        tempClear = Number(temperatura.toUpperCase().replace(f, ''))
        temperaturaEmCelcius = (((tempClear - 32) * 5) / 9)
        return `Temperatura: ${temperaturaEmCelcius.toFixed(2)}°C`
    } else if(celcius){
        tempClear = Number(temperatura.toUpperCase().replace(c, ''))
        temperaturaEmFahrenheit = (((tempClear * 9) / 5) + 32)
        return `Temperatura: ${temperaturaEmFahrenheit.toFixed(2)}°F`
    } else {
        return 'Valor inválido!'
    }
}

header()
var temperatura = input.question('Digite a temperatura [xxxC]: ')
console.clear()
header()
console.log(celciusOrFahrenheit(temperatura))

console.log('===========================')