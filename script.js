const botaoIncluirTarefa = document.getElementById("criar-tarefa");//botyão
const listaTarefas = document.getElementById("lista-tarefas");//ol
const inputTarefa = document.getElementById("texto-tarefa");//imput
const clearbotao = document.getElementById("apaga-tudo");// botão limpar tudo
const btRemoveFinalizado = document.getElementById("remover-finalizados")




botaoIncluirTarefa.addEventListener('click', adicionaTarefa)

function adicionaTarefa(event) {
  const textoLista = inputTarefa.value;
  const itensLista = document.createElement("li");
  itensLista.innerText = textoLista;
  itensLista.classList.add("texto-item-list");
  listaTarefas.appendChild(itensLista);
  inputTarefa.value = '';
}



const lista = document.getElementById("lista-tarefas"); // testar apagar essa linha e usar a variavel que defini no incluir
function changeBack() {
  lista.addEventListener("click", function (event) {
    let itemSelecionado = document.querySelectorAll(".select");//

    for (let index = 0; index < itemSelecionado.length; index += 1) {
      itemSelecionado[index].classList.remove("select");

    }
    event.target.classList.add("select");
  })
}
changeBack();

//let completo= document.querySelectorAll("texto-item-list")
//completo.addEventListener("dblclick", function(event){

// event.target.classList.toogle("riscado")
//})


function duploClick() {

  listaTarefas.addEventListener("dblclick", function (event) {

    if (event.target.classList.contains("texto-item-list")) {
      event.target.classList.toggle("completed");
    }
  }
  )
}
duploClick();

function limparLista() {
  clearbotao.addEventListener("click", function () {
    listaTarefas.innerHTML = "";
  })
}
limparLista();

function removeFinalizados() {
  btRemoveFinalizado.addEventListener('click', function() {
  const apagaRiscados = document.querySelectorAll('.completed')
  for(let index = 0; index < apagaRiscados.length; index += 1) {
  listaTarefas.removeChild(apagaRiscados[index])
  }
  })
  }
  removeFinalizados(); 



