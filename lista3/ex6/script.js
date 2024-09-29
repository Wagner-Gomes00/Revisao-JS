function desenharPiramide() {
    const andares = parseInt(document.getElementById("andares").value);
    let piramide = "";

    if (isNaN(andares) || andares <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido de andares.";
        return;
    }

    for (let i = 1; i <= andares; i++) {
        
        let espacos = " ".repeat(andares - i);
       
        let asteriscos = "*".repeat(2 * i - 1);
        piramide += espacos + asteriscos + "\n";
    }

    document.getElementById("resultado").innerText = piramide;
}
