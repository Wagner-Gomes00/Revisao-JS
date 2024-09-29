function calcularAntecessorSucessor() {
    
    var numero = parseInt(document.getElementById("numero").value);
    
    if (isNaN(numero)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido.";
        return;
    }

    var antecessor = numero - 1;
    var sucessor = numero + 1;
    
    document.getElementById("resultado").innerHTML =
        "O antecessor de " + numero + " é " + antecessor + " e o sucessor é " + sucessor + ".";
}
