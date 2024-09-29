let listaCompras = [];

function mostrarMenu() {
    document.getElementById("menu").style.display = "block";
}

function adicionarItem() {
    document.getElementById("formAdicionar").style.display = "block";
}

function inserirItem() {
    const item = document.getElementById("item").value;

    if (item.trim() === "") {
        alert("Por favor, insira um nome de item válido.");
        return;
    }

    listaCompras.push(item);

    document.getElementById("item").value = "";
    document.getElementById("formAdicionar").style.display = "none";

    alert("Item adicionado com sucesso!");
}

function verLista() {
    const lista = document.getElementById("listaCompras");
    lista.innerHTML = "";  

    if (listaCompras.length === 0) {
        alert("A lista de compras está vazia.");
        return;
    }

    listaCompras.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });
}
