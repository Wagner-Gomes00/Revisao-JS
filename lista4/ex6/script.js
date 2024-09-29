let listaCompras = [];

function mostrarMenu() {
    document.getElementById("menu").style.display = "block";
}

function adicionarItem() {
    document.getElementById("formAdicionar").style.display = "block";
    document.getElementById("formRemover").style.display = "none"; 
}

function removerItem() {
    document.getElementById("formRemover").style.display = "block";
    document.getElementById("formAdicionar").style.display = "none"; 
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

function removerItemLista() {
    const itemRemover = document.getElementById("itemRemover").value;

    if (itemRemover.trim() === "") {
        alert("Por favor, insira o nome do item que deseja remover.");
        return;
    }

    const index = listaCompras.indexOf(itemRemover);

    if (index !== -1) {
        
        listaCompras.splice(index, 1);
        alert("Item removido com sucesso!");
    } else {
        alert("Item não encontrado na lista.");
    }

    document.getElementById("itemRemover").value = "";
    document.getElementById("formRemover").style.display = "none";

    verLista();
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
