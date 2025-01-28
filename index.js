import { criarItemDaLista } from "./scripts/criarItemdaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras= document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById("adicionar-item");


botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault(); // importante, isso previne o comportamento default de envio de formulario, atualizar pagina
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista)
    verificarListaVazia(listaDeCompras);
})

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Previne o comportamento padrão do Enter
    }
});

verificarListaVazia(listaDeCompras);