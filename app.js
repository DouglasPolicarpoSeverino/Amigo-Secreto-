const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const amigos = [];

function adicionarAmigo() {
  const amigoInput = document.getElementById('amigo');
  const amigoNome = amigoInput.value.trim();

  if (amigoNome !== "") {
    amigos.push(amigoNome);
    amigoInput.value = "";
    renderizarLista();
  }
}

function renderizarLista() {
  listaAmigos.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    resultado.textContent = "Adicione amigos para sortear!";
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  resultado.innerHTML = '';
  const li = document.createElement('li');
  li.textContent = `Seu amigo secreto é: ${amigoSorteado}`;
  resultado.appendChild(li);

  amigos.splice(indiceSorteado, 1);
}