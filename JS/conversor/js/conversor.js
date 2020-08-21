
function converterParaFahrenheit() {
    var celsius = document.querySelector("#celsius").value;
    var celsiusParaFahrenheit = (celsius / 100) * 180 + 32;
    return  celsiusParaFahrenheit.toFixed(1);

}

function converterParaCelsius() {
    var fahrenheit = document.querySelector("#fahrenheit").value;
    var fahrenheitParaCelsius = (fahrenheit - 32) / 1.8;
    return  fahrenheitParaCelsius.toFixed(1);

}


function inputCelsius() {
    var fahrenheit = document.querySelector("#fahrenheit");
    var tempConvertidaFah = converterParaFahrenheit();
    fahrenheit.value= tempConvertidaFah;

}

function inputFahrenheit() {
    var celsius = document.querySelector("#celsius");
    var tempConvertidaCel = converterParaCelsius();
    celsius.value=tempConvertidaCel;

}

/* ver evento para escutar mudança no texto do input. Podemos usar o onchange no HTML
var fahrenheit = document.querySelector("#fahrenheit");
var celsius = document.querySelector("#celsius");
fahrenheit.addEventListener('change',(event) =>{
    inputFahrenheit();
});*/