import gerarDiaDaSemana from "./gerarDiaDaSemana.js"; 

const inputItem = document.getElementById("input-item");
let contador = 0;
export function criarItemDaLista() {
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return
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
    })

    // Criando o DOM (arvore genealogica) do nosso card de itens
    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
    const dataCompleta = gerarDiaDaSemana();
    
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data")
    itemDaLista.appendChild(itemData)

    return itemDaLista;
}