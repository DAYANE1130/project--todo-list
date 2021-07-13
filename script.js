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
  
  listaTarefas.addEventListener("dblclick", function (event) {console.log(event.target.classList)

    if (event.target.classList.contains("texto-item-list")) {
      event.target.classList.toggle("completed"); 
    }
    
  }
  )
}
duploClick();







