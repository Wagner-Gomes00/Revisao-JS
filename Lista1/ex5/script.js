function calcularValorTerreno() {
  
    var area = parseFloat(document.getElementById("area").value);
    var valor_m2 = parseFloat(document.getElementById("valor_m2").value);

    if (isNaN(area) || isNaN(valor_m2)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    var valor_total = area * valor_m2;

    document.getElementById("resultado").innerHTML =
        "O valor total do terreno é R$ " + valor_total.toFixed(2) + ".";
}
