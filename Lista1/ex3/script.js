function converter() {
    const valorReais = document.getElementById('valorReais').value;
    const taxaCambio = 5.25;
    const valorDolares = valorReais / taxaCambio;
    document.getElementById('resultado').textContent = `Valor em dólares: $${valorDolares.toFixed(2)}`;
}
