function saudar() {
    
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;

    if (nome && sobrenome) {
        
        document.getElementById('saudacao').innerText = `Olá, ${nome} ${sobrenome}!`;
    } else {
        
        document.getElementById('saudacao').innerText = 'Por favor, preencha o nome e o sobrenome.';
    }
}
