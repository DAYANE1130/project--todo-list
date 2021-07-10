


//Incluir texto  digitado no imput//
const botaoIncluirTarefa = document.getElementById("criar-tarefa");//botyão
const listaTarefas = document.getElementById("lista-tarefas");//ol
const inputTarefa = document.getElementById("texto-tarefa");//imput

botaoIncluirTarefa.addEventListener('click', adicionaTarefa)

function adicionaTarefa(event) {
    const textoLista = inputTarefa.value;
    const itensLista = document.createElement("li");
    itensLista.innerText = textoLista;
    itensLista.classList.add("texto-item-list");
    listaTarefas.appendChild(itensLista);
    inputTarefa.value='';

}



