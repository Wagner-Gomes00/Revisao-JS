function encontrarPares() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira dois números inteiros válidos.";
        return;
    }

    var inicio = Math.min(numero1, numero2);
    var fim = Math.max(numero1, numero2);

    var resultado = "<ul>";

    for (var i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            resultado += "<li>" + i + "</li>";
        }
    }

    resultado += "</ul>";

    document.getElementById("resultado").innerHTML = resultado;
}
