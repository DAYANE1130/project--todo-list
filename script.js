


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
  inputTarefa.value = '';
}


//function listarClick(event){
//    limpaLista();
//  event.target.style.backgroundColor= "rgb(128,128,128)";
//}
//function limpaLista(){
//  const lista= document.querySelectorAll(".texto-item-list");
//  for (let index = 0; index < lista.length; index+=1) {
//       if(lista[index].style.backgroundColor==="rgb(128,128,128)"){
//          lista[index].style.backgroundColor="white";
//      }

//   }
//}










const lista = document.getElementById("lista-tarefas");
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












//let itensParaEscolha=document.querySelectorAll(".texto-item-list");
//for (let index = 0; index < itensParaEscolha.length; index+=1){
  //  itensParaEscolha[index].addEventListener("click", function(event){
     //  let listenClick=document.getElementsByClassName("texto-item-list")
     //  listenClick.style.backgrounColor= "rgb(128,128,128)";

  //  }) // rebece uma função q tem um evento






