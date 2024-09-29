const perguntas = [
    {
        pergunta: "Qual é a capital da França?",
        opcoes: ["Paris", "Roma", "Londres", "Berlim"],
        respostaCerta: 0
    },
    {
        pergunta: "Quantos continentes existem?",
        opcoes: ["5", "6", "7", "8"],
        respostaCerta: 2
    },
    {
        pergunta: "Quem pintou a Mona Lisa?",
        opcoes: ["Van Gogh", "Leonardo da Vinci", "Michelangelo", "Picasso"],
        respostaCerta: 1
    },
    {
        pergunta: "Qual é o maior oceano?",
        opcoes: ["Atlântico", "Pacífico", "Índico", "Ártico"],
        respostaCerta: 1
    },
    {
        pergunta: "Qual é o planeta mais próximo do Sol?",
        opcoes: ["Terra", "Marte", "Mercúrio", "Vênus"],
        respostaCerta: 2
    }
];

let perguntaAtual = 0;
let acertos = 0;
let erros = 0;
const maxErros = 3;

function carregarPergunta() {
    if (erros >= maxErros) {
        document.getElementById("final").innerHTML = "Você perdeu o jogo! Errou 3 vezes.";
        document.getElementById("jogo").style.display = "none";
        return;
    }

    if (perguntaAtual >= perguntas.length) {
        document.getElementById("final").innerHTML = "Fim do jogo! Você acertou " + acertos + " de " + perguntas.length + " perguntas.";
        document.getElementById("jogo").style.display = "none";
        return;
    }

    const perguntaObj = perguntas[perguntaAtual];
    document.getElementById("pergunta").innerHTML = perguntaObj.pergunta;
    for (let i = 0; i < 4; i++) {
        document.getElementById("opcao" + i).innerHTML = perguntaObj.opcoes[i];
    }
    document.getElementById("resultado").innerHTML = "";
}

function verificarResposta(resposta) {
    const perguntaObj = perguntas[perguntaAtual];
    if (resposta === perguntaObj.respostaCerta) {
        acertos++;
        document.getElementById("resultado").innerHTML = "Você acertou!";
    } else {
        erros++;
        document.getElementById("resultado").innerHTML = "Você errou! Número de erros: " + erros;
    }

    perguntaAtual++;
    setTimeout(carregarPergunta, 1000); 
}

carregarPergunta();
