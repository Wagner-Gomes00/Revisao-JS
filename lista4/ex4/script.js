function contarPares() {
    const lista = [3, 5, 6, 7, 8, 10, 22, 55, 110];
    let contadorPares = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            contadorPares++;
        }
    }

    document.getElementById("resultado").textContent = contadorPares;
}
