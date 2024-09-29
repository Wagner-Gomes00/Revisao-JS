function compararNumeros() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira dois números válidos.";
        return;
    }

    if (numero1 > numero2) {
        document.getElementById("resultado").innerHTML = "O primeiro número (" + numero1 + ") é maior.";
    } else if (numero2 > numero1) {
        document.getElementById("resultado").innerHTML = "O segundo número (" + numero2 + ") é maior.";
    } else {
        document.getElementById("resultado").innerHTML = "Os dois números são iguais.";
    }
}
