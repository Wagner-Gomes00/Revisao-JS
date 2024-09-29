function verificarAprovacao() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    if (isNaN(nota1) || isNaN(nota2)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira notas válidas.";
        return;
    }

    var media = (nota1 + nota2) / 2;

    if (media >= 6) {
        document.getElementById("resultado").innerHTML = "Aprovado com média " + media.toFixed(2);
    } else {
        document.getElementById("resultado").innerHTML = "Você precisa de recuperação. Média " + media.toFixed(2);
        document.getElementById("recuperacao").style.display = "block";
    }
}

function verificarRecuperacao() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var notaRecuperacao = parseFloat(document.getElementById("notaRecuperacao").value);

    if (isNaN(notaRecuperacao)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira uma nota de recuperação válida.";
        return;
    }

    
    var menorNota = Math.min(nota1, nota2);
    if (menorNota === nota1) {
        nota1 = notaRecuperacao;
    } else {
        nota2 = notaRecuperacao;
    }

    var novaMedia = (nota1 + nota2) / 2;

    if (novaMedia >= 6) {
        document.getElementById("resultado").innerHTML = "Aprovado após recuperação com média " + novaMedia.toFixed(2);
    } else {
        document.getElementById("resultado").innerHTML = "Reprovado após recuperação com média " + novaMedia.toFixed(2);
    }
}
