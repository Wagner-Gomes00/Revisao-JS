function desenharRetangulo() {
    const largura = parseInt(document.getElementById("largura").value);
    const altura = parseInt(document.getElementById("altura").value);
    let retangulo = "";

    if (isNaN(largura) || isNaN(altura) || largura <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para largura e altura.";
        return;
    }

    for (let i = 0; i < altura; i++) {
        retangulo += "*".repeat(largura) + "\n";
    }

    document.getElementById("resultado").innerText = retangulo;
}
