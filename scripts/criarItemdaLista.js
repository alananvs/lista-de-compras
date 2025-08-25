export function criarItemDaLista(itemObj, indice, listaArray, salvarListaNoLocalStorage, renderizarListaCompleta) {
    const li = document.createElement("li");

    // Container geral (flex)
    const container = document.createElement("div");
    container.classList.add("lista-item-container");

    // Container da esquerda (checkbox + texto)
    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left-container"); // NOVO

    // Checkbox
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.checked = !!itemObj.feito;

    // Texto do item
    const nomeItem = document.createElement("p");
    nomeItem.innerText = itemObj.texto;

    // Ações do checkbox
    inputCheckbox.addEventListener("click", function() {
        itemObj.feito = inputCheckbox.checked;
        salvarListaNoLocalStorage(listaArray);
        if(inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
            li.style.color = "grey";
            li.style.transform = "scale(0.95)";
        } else {
            nomeItem.style.textDecoration = "none";
            li.style.color = "black";
            li.style.transform = "scale(1)";
        }
    });

    // Estiliza se carregado como feito
    if(itemObj.feito) {
        nomeItem.style.textDecoration = "line-through";
        li.style.color = "grey";
        li.style.transform = "scale(0.95)";
    }

    // Botão de excluir
    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "❌";
    botaoExcluir.classList.add("item-lista-button");
    botaoExcluir.title = "Excluir item";
    botaoExcluir.addEventListener("click", () => {
        listaArray.splice(indice, 1);
        salvarListaNoLocalStorage(listaArray);
        renderizarListaCompleta();
    });

    // Monta as divs
    leftContainer.appendChild(inputCheckbox);
    leftContainer.appendChild(nomeItem);

    container.appendChild(leftContainer);
    container.appendChild(botaoExcluir);

    li.appendChild(container);

    // Data opcional
    if(itemObj.data) {
        const itemData = document.createElement("p");
        itemData.innerText = itemObj.data;
        itemData.classList.add("texto-data");
        li.appendChild(itemData);
    }

    return li;
}
