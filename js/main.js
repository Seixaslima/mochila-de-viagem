const form = document.getElementById('novoItem');
const listaItens = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach(elemento => {
  criaItem(elemento);
});

form.addEventListener('submit', evento => {
  evento.preventDefault();

  const nome = evento.target.elements['nome'];
  const quantidade = evento.target.elements['quantidade'];

  const existe = itens.find(elemento => elemento.nome === nome.value);
  const itemAtual = { nome: nome.value, quantidade: quantidade.value };

  if (existe) {
    itemAtual.id = existe.id;
    atualizaItem(itemAtual);
    itens[itens.findIndex(elemento => elemento.id === id)] = itemAtual;
  } else {
    itemAtual.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;
    itens.push(itemAtual);
    criaItem(itemAtual);
  }

  localStorage.setItem('itens', JSON.stringify(itens));
  nome.value = '';
  quantidade.value = '';
});

function criaItem(item) {
  // <li class="item"><strong>3</strong>Casaco</li>
  const novoItem = document.createElement('li');
  novoItem.classList.add('item');

  const quantidadeItem = document.createElement('strong');
  quantidadeItem.innerHTML = item.quantidade;
  quantidadeItem.dataset.id = item.id;
  novoItem.appendChild(quantidadeItem);
  novoItem.innerHTML += item.nome;
  novoItem.appendChild(botaoDeleta(item.id));
  listaItens.appendChild(novoItem);
}

function atualizaItem(item) {
  document.querySelector(`[data-id='${item.id}']`).innerHTML = item.quantidade;
}

function botaoDeleta(id) {
  const elementoBotao = document.createElement('button');
  elementoBotao.innerHTML = 'X';

  elementoBotao.addEventListener('click', function () {
    deletaElemento(this.parentNode, id);
  });

  return elementoBotao;
}

function deletaElemento(tag, id) {
  tag.remove();
  itens.splice(
    itens.findIndex(elemento => elemento.id === id),
    1
  );

  localStorage.setItem('itens', JSON.stringify(itens));
}
