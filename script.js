const botaoIncluirTarefa = document.getElementById('criar-tarefa');// botyão
const listaTarefas = document.getElementById('lista-tarefas');// ol
const inputTarefa = document.getElementById('texto-tarefa');// imput
const clearbotao = document.getElementById('apaga-tudo');// botão limpar tudo
const btRemoveFinalizado = document.getElementById('remover-finalizados');

botaoIncluirTarefa.addEventListener('click', adicionaTarefa);

function adicionaTarefa(event) {
  const textoLista = inputTarefa.value;
  const itensLista = document.createElement('li');
  itensLista.innerText = textoLista;
  itensLista.classList.add('texto-item-list');
  listaTarefas.appendChild(itensLista);
  inputTarefa.value = '';
}

const lista = document.getElementById('lista-tarefas'); // testar apagar essa linha e usar a variavel que defini no incluir
function changeBack() {
  lista.addEventListener('click', (event) => {
    const itemSelecionado = document.querySelectorAll('.select');//

    for (let index = 0; index < itemSelecionado.length; index += 1) {
      itemSelecionado[index].classList.remove('select');
    }
    event.target.classList.add('select');
  });
}
changeBack();

function duploClick() {
  listaTarefas.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('texto-item-list')) {
      event.target.classList.toggle('completed');
    }
  });
}
duploClick();

function limparLista() {
  clearbotao.addEventListener('click', () => {
    listaTarefas.innerHTML = '';
  });
}
limparLista();

function removeFinalizados() {
  btRemoveFinalizado.addEventListener('click', () => {
    const apagaRiscados = document.querySelectorAll('.completed');
    for (let index = 0; index < apagaRiscados.length; index += 1) {
      listaTarefas.removeChild(apagaRiscados[index]);
    }
  });
}
removeFinalizados();
