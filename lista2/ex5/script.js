// Definindo credenciais corretas para verificação
var loginCorreto = "usuario";
var senhaCorreta = "senha";

function verificarCredenciais() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

        if (login !== loginCorreto && senha !== senhaCorreta) {
        document.getElementById("resultado").innerHTML = "Login e senha incorretos.";
    } else if (login !== loginCorreto) {
        document.getElementById("resultado").innerHTML = "Login incorreto.";
    } else if (senha !== senhaCorreta) {
        document.getElementById("resultado").innerHTML = "Senha incorreta.";
    } else {
        document.getElementById("resultado").innerHTML = "Login e senha corretos. Acesso permitido!";
    }
}
