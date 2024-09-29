function calcularMedia() {
    
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira todas as quatro notas válidas.";
        return;
    }

    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    document.getElementById("resultado").innerHTML =
        "A média aritmética do aluno é " + media.toFixed(2) + ".";
}
