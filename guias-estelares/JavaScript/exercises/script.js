/*### Celsius em fahrenheit
Crie uma funçâo que receba uma string em celcius ou fahrenheit e faça a transformação de uma unidade para outra.
C = (F-32) * 5/9
F = C * 9/5 + 32
*/
/*
let currentTemperature = "20"

function fahrenheit(celsiusTemperature){
    let temperatureF = ((celsiusTemperature * (9/5)) + 32)    
    return temperatureF
}
function celsius(fahrenheitTemperature){
    let temperatureCelsius = ((fahrenheitTemperature - 32) * (5/9))
    return temperatureCelsius
}

console.log('Sua temperatura em Fahrenheit é '+fahrenheit(currentTemperature).toFixed(2)+' graus.')
console.log('Sua temperatura em Celsius e '+celsius(currentTemperature).toFixed(2)+' graus.')
*/
// transformDegree('50F')
function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }
}
// normal fluxo
const fahrenheit => ((fahrenheit-32) * (5/9))

try{
    transformDegree('50c')
} catch (erro){
    console.log(error)
}