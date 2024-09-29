let intervalo;

function iniciarCronometro() {
    let tempo = parseInt(document.getElementById("tempo").value);

    if (isNaN(tempo) || tempo < 1 || tempo > 59) {
        document.getElementById("mensagem").innerHTML = "Erro: Por favor, insira um número válido entre 1 e 59.";
        return;
    }

    document.getElementById("mensagem").innerHTML = "";
    document.getElementById("contador").innerHTML = "Tempo restante: " + tempo + " segundos";

    intervalo = setInterval(function () {
        if (tempo > 0) {
            tempo--;
            document.getElementById("contador").innerHTML = "Tempo restante: " + tempo + " segundos";
        } else {
            clearInterval(intervalo);
            document.getElementById("contador").innerHTML = "O tempo acabou!";
        }
    }, 1000);
}
