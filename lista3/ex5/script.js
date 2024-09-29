const loginCorreto = "usuario123";
const senhaCorreta = "senha123";
let tentativas = 0;
const maxTentativas = 3;

function verificarCredenciais() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if (tentativas >= maxTentativas) {
        document.getElementById("mensagem").innerHTML = "Acesso bloqueado. Você excedeu o número de tentativas.";
        return;
    }

    if (login === loginCorreto && senha === senhaCorreta) {
        document.getElementById("mensagem").innerHTML = "Acesso permitido. Bem-vindo!";
    } else {
        tentativas++;

        if (tentativas === maxTentativas - 1) {
            alert("Última tentativa, mais um erro seu acesso será bloqueado!");
        }

        if (login !== loginCorreto && senha !== senhaCorreta) {
            document.getElementById("mensagem").innerHTML = "Login e senha incorretos.";
        } else if (login !== loginCorreto) {
            document.getElementById("mensagem").innerHTML = "Login incorreto.";
        } else if (senha !== senhaCorreta) {
            document.getElementById("mensagem").innerHTML = "Senha incorreta.";
        }

        if (tentativas >= maxTentativas) {
            document.getElementById("mensagem").innerHTML = "Acesso bloqueado. Você excedeu o número de tentativas.";
        }
    }
}
