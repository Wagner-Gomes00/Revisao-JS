let numeroEscolhido;
let tentativas = 0;

function iniciarJogo() {
    numeroEscolhido = parseInt(document.getElementById("numeroEscolhido").value);

    if (isNaN(numeroEscolhido) || numeroEscolhido < 1 || numeroEscolhido > 100) {
        document.getElementById("mensagem").innerHTML = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    document.getElementById("configuracao").style.display = "none";
    document.getElementById("adivinhacao").style.display = "block";
    document.getElementById("mensagem").innerHTML = "O número foi escolhido! Tente adivinhar.";
}

function verificarTentativa() {
    const tentativa = parseInt(document.getElementById("tentativa").value);

    if (isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
        document.getElementById("mensagem").innerHTML = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    tentativas++;

    const diferenca = Math.abs(tentativa - numeroEscolhido);

    if (tentativa === numeroEscolhido) {
        document.getElementById("mensagem").innerHTML = "Parabéns! Você adivinhou o número em " + tentativas + " tentativas!";
        document.getElementById("adivinhacao").style.display = "none";
    } else if (diferenca >= 20) {
        document.getElementById("mensagem").innerHTML = "Tá frio! Tente de novo.";
    } else if (diferenca >= 10) {
        document.getElementById("mensagem").innerHTML = "Tá quente! Continue tentando.";
    } else if (diferenca >= 5) {
        document.getElementById("mensagem").innerHTML = "Quase lá! Está muito perto.";
    } else {
        document.getElementById("mensagem").innerHTML = "Muito perto! Tente novamente.";
    }
}
