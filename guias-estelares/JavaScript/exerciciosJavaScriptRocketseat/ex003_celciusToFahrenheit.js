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
    let regExp = /\D/g

    if(erro){
        return 'Grau não identificado!'
    } else if(celcius){
        tempClear = Number(temperatura.replace(regExp, ''))
        temperaturaEmFahrenheit = (((tempClear * 9) / 5) + 32)
        return `Temperatura: ${temperaturaEmFahrenheit.toFixed(2)}°F`
    } else if(fahrenheit){
        tempClear = Number(temperatura.replace(regExp, ''))
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