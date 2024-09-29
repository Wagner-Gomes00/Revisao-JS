function verificarEntrada() {
    var idade = parseInt(document.getElementById("idade").value);
    var acompanhado = document.querySelector('input[name="acompanhado"]:checked');

    if (isNaN(idade) || (idade >= 16 && !acompanhado)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira sua idade e escolha se está acompanhado.";
        return;
    }

    if (idade < 16) {
        document.getElementById("resultado").innerHTML = "Entrada proibida. Menores de 16 anos não podem entrar.";
    } else if (idade >= 16 && idade < 18) {
        if (acompanhado.value === "sim") {
            document.getElementById("resultado").innerHTML = "Entrada permitida acompanhado dos responsáveis.";
        } else {
            document.getElementById("resultado").innerHTML = "Entrada proibida sem responsáveis.";
        }
    } else {
        document.getElementById("resultado").innerHTML = "Entrada permitida. Maior de 18 anos.";
    }
}
