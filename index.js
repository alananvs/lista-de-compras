// IMPORTS:
import { criarItemDaLista } from "./scripts/criarItemdaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
import gerarDiaDaSemana from "./scripts/gerarDiaDaSemana.js"; // <-- ADICIONE ESTA LINHA!

// ELEMENTOS DOM:
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
const inputItem = document.getElementById("input-item");
const select = document.getElementById("tipo-lista");
const h2 = document.getElementById("titulo-lista");

// FUNÇÕES LOCALSTORAGE:
function salvarListaNoLocalStorage(listaArray) {
    localStorage.setItem('minhaListaDeCompras', JSON.stringify(listaArray));
}
function recuperarListaDoLocalStorage() {
    const salva = localStorage.getItem('minhaListaDeCompras');
    if (salva) return JSON.parse(salva);
    return [];
}

// ESTADO:
let listaArray = recuperarListaDoLocalStorage();

// HANDLER ADICIONAR ITEM:
botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const valorInput = inputItem.value.trim();
    if (valorInput === "") {
        alert("Por favor, insira um item!");
        return;
    }
    const novoItem = {
        texto: valorInput,
        feito: false,
        data: gerarDiaDaSemana()
    };
    listaArray.push(novoItem);
    salvarListaNoLocalStorage(listaArray);
    renderizarListaCompleta();
    inputItem.value = "";
});

// BLOQUEIA ENTER:
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});

// RENDERIZAÇÃO DA LISTA:
function renderizarListaCompleta() {
    listaDeCompras.innerHTML = ""; // limpa tudo
    listaArray.forEach((item, idx) => {
        // criarItemDaLista deve retornar um LI pronto:
        const li = criarItemDaLista(item, idx, listaArray, salvarListaNoLocalStorage, renderizarListaCompleta);
        listaDeCompras.appendChild(li);
    });
    verificarListaVazia(listaDeCompras);
}

// SELECT altera o título:
select.addEventListener("change", function() {
    h2.textContent = select.options[select.selectedIndex].text;
});

// INICIALIZA:
renderizarListaCompleta();
verificarListaVazia(listaDeCompras);
