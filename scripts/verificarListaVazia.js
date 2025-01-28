const menssagemListaVazia = document.querySelector(".menssagem-lista-vazia")

// Função pra mostar mensagem de lista vazia
function verificarListaVazia(listaDeCompras) {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0 ) {
        menssagemListaVazia.style.display = "block"
    } else {
        menssagemListaVazia.style.display = "none"
    }
}

export default verificarListaVazia;