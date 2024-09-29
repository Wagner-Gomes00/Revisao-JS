let listaCompras = [];
let listaPrecos = [];

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
    const preco = parseFloat(document.getElementById("preco").value);

    if (item.trim() === "" || isNaN(preco) || preco <= 0) {
        alert("Por favor, insira um nome de item válido e um preço válido.");
        return;
    }

    listaCompras.push(item);
    listaPrecos.push(preco);

    document.getElementById("item").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("formAdicionar").style.display = "none";

    alert("Item e preço adicionados com sucesso!");
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
        listaPrecos.splice(index, 1);
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

    listaCompras.forEach(function (item, index) {
        const li = document.createElement("li");
        li.textContent = `${item} - R$ ${listaPrecos[index].toFixed(2)}`;
        lista.appendChild(li);
    });
}

function ordenarPorPreco() {
    const lista = document.getElementById("listaCompras");
    lista.innerHTML = ""; 

    if (listaCompras.length === 0) {
        alert("A lista de compras está vazia.");
        return;
    }

    const listaOrdenada = listaCompras.map((item, index) => ({
        item,
        preco: listaPrecos[index]
    }));

    listaOrdenada.sort((a, b) => a.preco - b.preco);
    
    listaOrdenada.forEach(function (elemento) {
        const li = document.createElement("li");
        li.textContent = `${elemento.item} - R$ ${elemento.preco.toFixed(2)}`;
        lista.appendChild(li);
    });
}
