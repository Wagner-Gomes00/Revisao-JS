function verificarDivisibilidade() {
    var numero = parseFloat(document.getElementById("numero").value);
    var divisor = parseFloat(document.getElementById("divisor").value);

    if (isNaN(numero) || isNaN(divisor) || divisor === 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos. O divisor não pode ser zero.";
        return;
    }

    if (numero % divisor === 0) {
        document.getElementById("resultado").innerHTML = "O número " + numero + " é divisível por " + divisor + ".";
    } else {
        document.getElementById("resultado").innerHTML = "O número " + numero + " não é divisível por " + divisor + ".";
    }
}
