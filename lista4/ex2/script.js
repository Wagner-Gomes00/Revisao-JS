let vendas = [];

function adicionarVenda() {
    const venda = parseFloat(document.getElementById("venda").value);

    if (isNaN(venda) || venda <= 0) {
        alert("Por favor, insira um valor de venda válido.");
        return;
    }

    vendas.push(venda);

    const lista = document.getElementById("listaVendas");
    const item = document.createElement("li");
    item.textContent = `Venda de R$ ${venda.toFixed(2)}`;
    lista.appendChild(item);

    document.getElementById("venda").value = "";
}

function calcularTotal() {
    if (vendas.length === 0) {
        alert("Nenhuma venda registrada!");
        return;
    }

    const total = vendas.reduce((acc, valor) => acc + valor, 0);
    const menorVenda = Math.min(...vendas);
    const maiorVenda = Math.max(...vendas);

    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("menor").textContent = menorVenda.toFixed(2);
    document.getElementById("maior").textContent = maiorVenda.toFixed(2);
}
