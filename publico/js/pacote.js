function calcularTotal(pacoteId) {
    const precoPorPacote = {
        1: 5880,  
        2: 6157, 
        3: 3146  
    };

    const quantidade = document.getElementById(`quantidade${pacoteId}`).value;
    const valorTotal = precoPorPacote[pacoteId] * quantidade;

    document.getElementById(`valorTotal${pacoteId}`).innerText = `Valor Total: R$ ${valorTotal}`;
}


