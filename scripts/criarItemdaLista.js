import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
// IMPORTANTE: importe a função de verificação para atualização ao excluir
import verificarListaVazia from "./verificarListaVazia.js";

const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras"); // para usar no botão excluir
let contador = 0;

export function criarItemDaLista() {
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function() {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
            itemDaLista.style.color = "grey"
            itemDaLista.style.transform = "scale(0.95)"
        } else {
            nomeItem.style.textDecoration = "none"
            itemDaLista.style.color = "black"
            itemDaLista.style.transform = "scale(1)"
        }
    });

    // ------ AQUI: Botão de excluir ------
    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "❌";
    botaoExcluir.classList.add("item-lista-button");
    botaoExcluir.title = "Excluir item";

    botaoExcluir.addEventListener("click", () => {
        itemDaLista.remove();
        verificarListaVazia(listaDeCompras); // Atualiza mensagem se a lista ficar vazia
    });

    // Criando o DOM (árvore genealógica) do nosso card de itens
    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    containerItemDaLista.appendChild(botaoExcluir); // <-- adiciona botão !
    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data")
    itemDaLista.appendChild(itemData)

    // Limpa o input
    inputItem.value = "";

    return itemDaLista;
}
