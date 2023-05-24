const form = document.getElementById('novoItem');
const listaItens = document.getElementById('lista');

form.addEventListener('submit', evento => {
  evento.preventDefault();

  criaItem(
    evento.target.elements['nome'].value,
    evento.target.elements['quantidade'].value
  );
});

function criaItem(nome, quantidade) {
  // <li class="item"><strong>3</strong>Casaco</li>
  const novoItem = document.createElement('li');
  novoItem.classList.add('item');

  const quantidadeItem = document.createElement('strong');
  quantidadeItem.innerHTML = quantidade;
  novoItem.appendChild(quantidadeItem);
  novoItem.innerHTML += nome;

  listaItens.appendChild(novoItem);
}
