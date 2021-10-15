var input = require('readline-sync')
function header(){
    console.log('===========================')
    console.log(' ex003_celciusToFahrenheit ')
    console.log('===========================')
}

function celciusOrFahrenheit(temperatura){
    let celcius = temperatura.toUpperCase().includes('C')
    let fahrenheit = temperatura.toUpperCase().includes('F')
    let erro = celcius && fahrenheit || !celcius && !fahrenheit
    // expressão regular para extrair apenas números
    let regexFahrenheit = /[^0-9]/g
    let regexCelcius = /[^0-9]/g

    if(erro){
        return 'Grau não identificado!'
    } else if(celcius){
        tempClear = Number(temperatura.replace(regexCelcius, ''))
        temperaturaEmFahrenheit = (((tempClear * 9) / 5) + 32)
        return `Temperatura: ${temperaturaEmFahrenheit.toFixed(2)}°F`
    } else if(fahrenheit){
        tempClear = Number(temperatura.replace(regexFahrenheit, ''))
        temperaturaEmCelcius = (((tempClear - 32) * 5) / 9)
        return `Temperatura: ${temperaturaEmCelcius.toFixed(2)}°C`
    }
}

header()
var temperatura = input.question('Digite a temperatura [xxxC]: ')
console.clear()
header()
console.log(celciusOrFahrenheit(temperatura))

console.log('===========================')