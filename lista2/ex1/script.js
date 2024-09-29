function verificarNumero() {
    var numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido.";
        return;
    }

    if (numero === 0) {
        document.getElementById("resultado").innerHTML = "O número é 0.";
    } else if (numero % 2 === 0) {
        document.getElementById("resultado").innerHTML = "O número " + numero + " é par.";
    } else {
        document.getElementById("resultado").innerHTML = "O número " + numero + " é ímpar.";
    }
}
