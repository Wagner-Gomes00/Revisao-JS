function converterParaCelsius() {
    
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    if (isNaN(fahrenheit)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira uma temperatura válida.";
        return;
    }

    var celsius = (fahrenheit - 32) * 5 / 9;

    document.getElementById("resultado").innerHTML =
        fahrenheit + "°F é equivalente a " + celsius.toFixed(2) + "°C.";
}
