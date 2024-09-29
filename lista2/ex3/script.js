function encaminharFila() {
    var idade = parseInt(document.getElementById("idade").value);
    var deficiente = document.querySelector('input[name="deficiente"]:checked');
    var gestante = document.querySelector('input[name="gestante"]:checked');

    if (isNaN(idade) || !deficiente || !gestante) {
        document.getElementById("resultado").innerHTML = "Por favor, preencha todas as perguntas.";
        return;
    }

    if (idade > 65 || deficiente.value === "sim" || gestante.value === "sim") {
        document.getElementById("resultado").innerHTML = "Você foi encaminhado para a <strong>fila preferencial</strong>.";
    } else {
        document.getElementById("resultado").innerHTML = "Você foi encaminhado para a <strong>fila comum</strong>.";
    }
}
