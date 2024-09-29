function gerarTabuada() {
    var numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido.";
        return;
    }

    var resultado = "<ul>";

    for (var i = 1; i <= 10; i++) {
        resultado += "<li>" + numero + " x " + i + " = " + (numero * i) + "</li>";
    }

    resultado += "</ul>";
    document.getElementById("resultado").innerHTML = resultado;
}
