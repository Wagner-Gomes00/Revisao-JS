function calcularConsumoMedio() {
    
    var distancia = parseFloat(document.getElementById("distancia").value);
    var combustivel = parseFloat(document.getElementById("combustivel").value);

   
    if (isNaN(distancia) || isNaN(combustivel) || combustivel <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos.";
        return;
    }

  
    var consumoMedio = distancia / combustivel;

    
    document.getElementById("resultado").innerHTML =
        "O consumo médio do veículo é " + consumoMedio.toFixed(2) + " km/l.";
}
