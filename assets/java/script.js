let produtosIniciais = [
  { id: 1, nome: "Pulseira Copa 2026", descricao: "Pulseira esportiva personalizada", preco: 29.90, categoria: "Acessórios", tamanho: "Único", cor: "Vermelha", imagem: "assets/img/pulseira.jpg", quantidade: 50 },
  { id: 2, nome: "Bone São Paulo 2026", descricao: "Bone oficial São Paulo", preco: 179.90, categoria: "Bonés", tamanho: "P, M, G, GG", cor: "Vermelha", imagem: "assets/img/saopaulo.jpg", quantidade: 30 },
  { id: 3, nome: "Tiarinha Brasil", descricao: "Acessório para torcedor", preco: 19.90, categoria: "Acessórios", tamanho: "Único", cor: "Verde/Amarelo", imagem: "assets/img/tiarinha.jpg", quantidade: 40 },
  { id: 4, nome: "Camisa Uzbequistão 2026", descricao: "Camisa seleção Uzbequistão", preco: 149.90, categoria: "Camisas", tamanho: "P, M, G, GG", cor: "Azul", imagem: "assets/img/uzbequistao.jpg", quantidade: 20 },
  { id: 5, nome: "Camisa Vasco 2026", descricao: "Camisa oficial Vasco da Gama", preco: 179.90, categoria: "Camisas", tamanho: "P, M, G, GG", cor: "Preta", imagem: "assets/img/vasco.jpg", quantidade: 25 },
  { id: 6, nome: "Chuteira Predator ", descricao: "Chuteira com logo corporativo", preco: 59.90, categoria: "Chuteiras", tamanho: "Único", cor: "Diversas", imagem: "assets/img/ad1.jpg", quantidade: 35 },
  { id: 7, nome: "Chuteira Adidas ", descricao: "Chuteira com logo corporativo", preco: 59.90, categoria: "Chuteiras", tamanho: "Único", cor: "Diversas", imagem: "assets/img/ad2.jpg", quantidade: 35 },
  { id: 8, nome: "Chuteira PredatorFly ", descricao: "Chuteira com logo corporativo", preco: 59.90, categoria: "Chuteiras", tamanho: "Único", cor: "Diversas", imagem: "assets/img/ad3.jpg", quantidade: 35 },
  { id: 9, nome: "Chuteira Mercurial ", descricao: "Chuteira com logo corporativo", preco: 59.90, categoria: "Chuteiras", tamanho: "Único", cor: "Diversas", imagem: "assets/img/ad4.jpg", quantidade: 35 },
  { id: 10, nome: "Chuteira Society ", descricao: "Chuteira com logo corporativo", preco: 59.90, categoria: "Chuteiras", tamanho: "Único", cor: "Diversas", imagem: "assets/img/ad5.jpg", quantidade: 35 },
  { id: 11, nome: "API Poster", descricao: "Pôster decorativo", preco: 39.90, categoria: "Outros", tamanho: "30x40cm", cor: "Diversas", imagem: "assets/img/apit.png", quantidade: 25 },
  { id: 12, nome: "Camisa Austrália 2026", descricao: "Camisa seleção Austrália", preco: 169.90, categoria: "Camisas", tamanho: "P, M, G, GG", cor: "Amarela", imagem: "assets/img/australia.jpg", quantidade: 20 },
  { id: 13, nome: "Boné Brasil", descricao: "Boné cores do Brasil", preco: 49.90, categoria: "Bonés", tamanho: "Único", cor: "Amarelo/Verde", imagem: "assets/img/bnbrasil.jpg", quantidade: 40 },
  { id: 14, nome: "Bolsa Esportiva", descricao: "Bolsa para levar seus itens", preco: 89.90, categoria: "Outros", tamanho: "Média", cor: "Preta", imagem: "assets/img/bolsa.jpg", quantidade: 25 },
  { id: 15, nome: "Camisa Canadá 2026", descricao: "Camisa seleção Canadá", preco: 149.90, categoria: "Camisas", tamanho: "P, M, G, GG", cor: "Vermelha", imagem: "assets/img/canada.jpg", quantidade: 20 },
  { id: 16, nome: "Caneleira Proteção", descricao: "Caneleira para proteção", preco: 79.90, categoria: "Outros", tamanho: "P, M, G", cor: "Preta", imagem: "assets/img/caneleira.jpg", quantidade: 30 },
  { id: 17, nome: "Fita de Capitão", descricao: "Fita para capitão do time", preco: 24.90, categoria: "Acessórios", tamanho: "Único", cor: "Diversas", imagem: "assets/img/capitao.jpg", quantidade: 45 },
  { id: 18, nome: "Camisa Coreia do Sul 2026", descricao: "Camisa seleção Coreia do Sul", preco: 149.90, categoria: "Camisas", tamanho: "P, M, G, GG", cor: "Vermelha", imagem: "assets/img/coreiadosul.jpg", quantidade: 20 },
  { id: 19, nome: "Camisa Curaçao 2026", descricao: "Camisa seleção Curaçao", preco: 149.90, categoria: "Camisas", tamanho: "P, M, G, GG", cor: "Azul", imagem: "assets/img/Curaçao.jpg", quantidade: 20 },
  { id: 20, nome: "Camisa Estados Unidos 2026", descricao: "Camisa seleção Estados Unidos", preco: 149.90, categoria: "Camisas", tamanho: "P, M, G, GG", cor: "Azul", imagem: "assets/img/estadosunidos.jpg", quantidade: 20 },
  { id: 21, nome: "Camisa Flamengo 2026", descricao: "Camisa oficial Flamengo", preco: 179.90, categoria: "Camisas", tamanho: "P, M, G, GG", cor: "Vermelha", imagem: "assets/img/flamengo.jpg", quantidade: 30 },
  { id: 22, nome: "Garrafa de Água 750ml", descricao: "Garrafa térmica esportiva", preco: 69.90, categoria: "Outros", tamanho: "750ml", cor: "Azul", imagem: "assets/img/garrafa dagua.jpg", quantidade: 40 },
  { id: 23, nome: "Camisa Haiti 2026", descricao: "Camisa seleção Haiti", preco: 149.90, categoria: "Camisas", tamanho: "P, M, G, GG", cor: "Azul", imagem: "assets/img/haiti.jpg", quantidade: 20 },
  { id: 24, nome: "Camisa Irã 2026", descricao: "Camisa seleção Irã", preco: 149.90, categoria: "Camisas", tamanho: "P, M, G, GG", cor: "Branca", imagem: "assets/img/ira.jpg", quantidade: 20 },
  { id: 25, nome: "Camisa Japão 2026", descricao: "Camisa seleção Japão", preco: 149.90, categoria: "Camisas", tamanho: "P, M, G, GG", cor: "Azul", imagem: "assets/img/japao.jpg", quantidade: 20 },
  { id: 26, nome: "Camisa Jordânia 2026", descricao: "Camisa seleção Jordânia", preco: 149.90, categoria: "Camisas", tamanho: "P, M, G, GG", cor: "Branca", imagem: "assets/img/jordania.jpg", quantidade: 20 },
  { id: 27, nome: "Luva de Goleiro", descricao: "Luva profissional para goleiro", preco: 129.90, categoria: "Outros", tamanho: "P, M, G", cor: "Preta", imagem: "assets/img/luvadegoleiro.jpg", quantidade: 25 },
  { id: 28, nome: "Camisa México 2026", descricao: "Camisa seleção México", preco: 149.90, categoria: "Camisas", tamanho: "P, M, G, GG", cor: "Verde", imagem: "assets/img/mexico.jpg", quantidade: 20 },
  { id: 29, nome: "Chuteira Nike Vaporfly", descricao: "Tênis esportivo Nike", preco: 299.90, categoria: "Chuteiras", tamanho: "33-46", cor: "Diversas", imagem: "assets/img/nk1.jpg", quantidade: 15 },
  { id: 30, nome: "Chuteira Nike React", descricao: "Tênis esportivo Nike", preco: 299.90, categoria: "Chuteiras", tamanho: "33-46", cor: "Diversas", imagem: "assets/img/nk2.jpg", quantidade: 15 },
  { id: 31, nome: "Chuteira Nike Air Zoom", descricao: "Tênis esportivo Nike", preco: 299.90, categoria: "Chuteiras", tamanho: "33-46", cor: "Diversas", imagem: "assets/img/nk3.jpg", quantidade: 15 },
  { id: 32, nome: "Chuteira Nike Zoom Fly", descricao: "Tênis esportivo Nike", preco: 299.90, categoria: "Chuteiras", tamanho: "33-46", cor: "Diversas", imagem: "assets/img/nk4.jpg", quantidade: 15 },
  { id: 33, nome: "Chuteira Nike Pegasus", descricao: "Tênis esportivo Nike", preco: 299.90, categoria: "Chuteiras", tamanho: "33-46", cor: "Diversas", imagem: "assets/img/nk5.jpg", quantidade: 15 },
  { id: 34, nome: "Camisa Panamá 2026", descricao: "Camisa seleção Panamá", preco: 149.90, categoria: "Camisas", tamanho: "P, M, G, GG", cor: "Vermelha", imagem: "assets/img/panama.jpg", quantidade: 20 }
];

let produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
let produtos = produtosIniciais.concat(produtosSalvos);
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let cardImageIndex = {}; // track per-card visible image index
let carouselInterval = null;

function getProdutoImages(produto) {
  if (produto.imagens && produto.imagens.length) return produto.imagens;
  if (produto.imagem) return [produto.imagem];  
  return ['assets/img/pulseira.jpg'];
}

function mostrarProdutos(lista) {
  let areaProdutos = document.getElementById("listaProdutos");

  if (!areaProdutos) {
    return;
  }

  areaProdutos.innerHTML = "";

  lista.forEach(function(produto) {
    let imagens = getProdutoImages(produto);
    // ensure an index exists
    if (cardImageIndex[produto.id] === undefined) cardImageIndex[produto.id] = 0;
    let current = imagens[cardImageIndex[produto.id]] || imagens[0];

    areaProdutos.innerHTML += `
      <div class="card" id="card-${produto.id}">
        <div class="card-image-wrapper">
          <img id="card-img-${produto.id}" src="${current}" alt="${produto.nome}" data-index="${cardImageIndex[produto.id]}">
          <div class="card-overlay">
            <span class="card-overlay-text">Veja mais</span>
          </div>
          ${imagens.length > 1 ? `
            <div class="card-carousel-controls">
              <button onclick="changeCardImage(${produto.id}, -1)" aria-label="Anterior">‹</button>
              <button onclick="changeCardImage(${produto.id}, 1)" aria-label="Próximo">›</button>
            </div>
          ` : ''}
        </div>

        <h3>${produto.nome}</h3>

        <p>${produto.descricao}</p>
        <p><strong>Categoria:</strong> ${produto.categoria}</p>
        <p><strong>Tamanho:</strong> ${produto.tamanho}</p>
        <p><strong>Cor:</strong> ${produto.cor}</p>
        <p><strong>Disponível:</strong> ${produto.quantidade}</p>

        <p class="preco">R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>

        <div class="card-actions">
          <button class="btn-secondary" onclick="mostrarDetalhes(${produto.id})">Ver detalhes</button>
          <button onclick="adicionarCarrinho(${produto.id})">Adicionar ao carrinho</button>
        </div>
      </div>
    `;
  });
}

function changeCardImage(id, dir) {
  let produto = produtos.find(p => p.id === id);
  if (!produto) return;
  let imagens = getProdutoImages(produto);
  let idx = cardImageIndex[id] || 0;
  idx = (idx + dir + imagens.length) % imagens.length;
  cardImageIndex[id] = idx;
  let imgEl = document.getElementById('card-img-' + id);
  if (imgEl) {
    imgEl.src = imagens[idx];
    imgEl.setAttribute('data-index', idx);
  }
}

function startCardCarousel() {
  if (carouselInterval) {
    return;
  }

  carouselInterval = setInterval(function() {
    produtos.forEach(function(produto) {
      let imagens = getProdutoImages(produto);
      if (imagens.length <= 1) {
        return;
      }

      let idx = cardImageIndex[produto.id] || 0;
      idx = (idx + 1) % imagens.length;
      cardImageIndex[produto.id] = idx;

      let imgEl = document.getElementById('card-img-' + produto.id);
      if (imgEl) {
        imgEl.src = imagens[idx];
        imgEl.setAttribute('data-index', idx);
      }
    });
  }, 3500);
}

function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("toast-show");

  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(function() {
    toast.classList.remove("toast-show");
  }, 3200);
}

function mostrarDetalhes(id) {
  let produto = produtos.find(function(item) {
    return item.id === id;
  });

  if (!produto) {
    showToast("Produto não encontrado.");
    return;
  }

  document.getElementById("modalTitulo").textContent = produto.nome;
  document.getElementById("modalDescricao").textContent = produto.descricao;
  document.getElementById("modalCategoria").textContent = produto.categoria;
  document.getElementById("modalTamanho").textContent = produto.tamanho;
  document.getElementById("modalCor").textContent = produto.cor;
  document.getElementById("modalQuantidade").textContent = produto.quantidade;
  document.getElementById("modalPreco").textContent = produto.preco.toFixed(2).replace(".", ",");

  document.getElementById("detalhesModal").classList.remove("hidden");
}

function fecharDetalhes() {
  document.getElementById("detalhesModal").classList.add("hidden");
}

function adicionarCarrinho(id) {
  let produto = produtos.find(function(item) {
    return item.id === id;
  });

  let itemCarrinho = carrinho.find(function(item) {
    return item.id === id;
  });

  if (itemCarrinho) {
    itemCarrinho.quantidadeCarrinho++;
  } else {
    carrinho.push({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      imagem: (produto.imagens && produto.imagens[0]) || produto.imagem,
      quantidadeCarrinho: 1
    });
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  mostrarCarrinho();
  animarAdicaoProduto(produto.id);
  showToast("Produto adicionado ao carrinho.");
}

function animarAdicaoProduto(id) {
  let carta = document.getElementById("card-" + id);
  if (!carta) {
    return;
  }

  carta.classList.add("card-added");
  setTimeout(function() {
    carta.classList.remove("card-added");
  }, 800);
}

function mostrarCarrinho() {
  let areaCarrinho = document.getElementById("lista-carrinho");
  let areaTotal = document.getElementById("total-carrinho");

  if (!areaCarrinho || !areaTotal) {
    return;
  }

  areaCarrinho.innerHTML = "";


  if (carrinho.length === 0) {
    areaCarrinho.innerHTML = '<li class="item-carrinho empty-cart">Seu carrinho está vazio.</li>';
  }

  let totalCompra = 0;

  carrinho.forEach(function(item) {
    let subtotal = item.preco * item.quantidadeCarrinho;
    totalCompra += subtotal;

    areaCarrinho.innerHTML += `
      <li class="item-carrinho">
        <div class="item-carrinho-image">
          <img src="${item.imagem}" alt="${item.nome}">
        </div>
        <div class="item-carrinho-details">
          <strong>${item.nome}</strong>
          <span>Preço: R$ ${item.preco.toFixed(2).replace(".", ",")}</span>
          <span>Quantidade: ${item.quantidadeCarrinho}</span>
          <span>Subtotal: R$ ${subtotal.toFixed(2).replace(".", ",")}</span>
        </div>
        <div class="item-carrinho-actions">
          <button onclick="diminuirQuantidade(${item.id})">-</button>
          <button onclick="aumentarQuantidade(${item.id})">+</button>
          <button onclick="removerCarrinho(${item.id})" class="btn-vermelho">Remover</button>
        </div>
      </li>
    `;
  });

  areaTotal.innerHTML = "Total: R$ " + totalCompra.toFixed(2).replace(".", ",");
  atualizarContadorCarrinho();
  atualizarResumoPagamento();
}

function atualizarResumoPagamento() {
  let resumo = document.getElementById("paymentOrderSummary");
  if (!resumo) {
    return;
  }

  if (carrinho.length === 0) {
    resumo.innerHTML = '<p class="payment-summary-empty">Seu carrinho está vazio. Adicione produtos para ver o resumo aqui.</p>';
    return;
  }

  let totalResumo = 0;
  resumo.innerHTML = carrinho.map(function(item) {
    let subtotal = item.preco * item.quantidadeCarrinho;
    totalResumo += subtotal;
    return `
      <div class="payment-order-item">
        <img src="${item.imagem}" alt="${item.nome}">
        <div class="payment-order-details">
          <strong>${item.nome}</strong>
          <span>Qtd: ${item.quantidadeCarrinho}</span>
          <span>R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
        </div>
        <button onclick="removerCarrinho(${item.id})" class="btn-vermelho">Remover</button>
      </div>
    `;
  }).join('');

  resumo.innerHTML += `<div class="payment-order-total">Total: R$ ${totalResumo.toFixed(2).replace('.', ',')}</div>`;
}

function atualizarContadorCarrinho() {
  let contador = document.getElementById("cartCount");
  if (!contador) {
    return;
  }

  let totalItens = carrinho.reduce(function(total, item) {
    return total + item.quantidadeCarrinho;
  }, 0);

  contador.textContent = totalItens;
}

function toggleCarrinho() {
  let carrinhoEl = document.getElementById("carrinho");
  if (!carrinhoEl) {
    return;
  }

  if (carrinhoEl.style.display === "block") {
    carrinhoEl.style.display = "none";
  } else {
    carrinhoEl.style.display = "block";
  }
}

function aumentarQuantidade(id) {
  let item = carrinho.find(function(produto) {
    return produto.id === id;
  });

  item.quantidadeCarrinho++;

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  mostrarCarrinho();
}

function diminuirQuantidade(id) {
  let item = carrinho.find(function(produto) {
    return produto.id === id;
  });

  if (item.quantidadeCarrinho > 1) {
    item.quantidadeCarrinho--;
  } else {
    removerCarrinho(id);
    return;
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  mostrarCarrinho();
}

function removerCarrinho(id) {
  carrinho = carrinho.filter(function(item) {
    return item.id !== id;
  });

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  mostrarCarrinho();
}

function limparCarrinho() {
  carrinho = [];
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  mostrarCarrinho();
  showToast("Carrinho limpo.");
}

function getCarrinhoTotal() {
  return carrinho.reduce(function(total, item) {
    return total + item.preco * item.quantidadeCarrinho;
  }, 0);
}

function renderPayPalButtons() {
  let buttonContainer = document.getElementById("paypal-button-container");
  if (!buttonContainer || !window.paypal) {
    return;
  }

  buttonContainer.innerHTML = "";

  paypal.Buttons({
    style: {
      layout: 'vertical',
      color: 'blue',
      shape: 'rect',
      label: 'paypal'
    },
    createOrder: function(data, actions) {
      let total = getCarrinhoTotal();
      if (total <= 0) {
        showToast('Adicione itens ao carrinho antes de pagar.');
        return actions.reject();
      }
      return actions.order.create({
        purchase_units: [{
          amount: {
            currency_code: 'BRL',
            value: total.toFixed(2)
          },
          description: 'Compra Tailand Store'
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        showToast('Pagamento aprovado! Obrigado, ' + details.payer.name.given_name + '.');
        carrinho = [];
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        mostrarCarrinho();
      });
    },
    onError: function(err) {
      console.error(err);
      showToast('Erro no PayPal. Tente novamente mais tarde.');
    }
  }).render('#paypal-button-container');
}

function comprarPaypal() {
  if (carrinho.length === 0) {
    showToast("Adicione algum produto no carrinho antes de comprar.");
    return;
  }

  let container = document.getElementById("paypal-button-container");
  if (container) {
    container.scrollIntoView({ behavior: "smooth", block: "center" });
    showToast("Use o botão do PayPal para finalizar o pagamento.");
  }
}

function filtrarProdutos() {
  let texto = document.getElementById("pesquisa").value.toLowerCase();
  let categoria = document.getElementById("filtroCategoria").value;

  let produtosFiltrados = produtos.filter(function(produto) {
    let nomeCombina = produto.nome.toLowerCase().includes(texto);
    let categoriaCombina = categoria === "Todos" || produto.categoria === categoria;

    return nomeCombina && categoriaCombina;
  });

  mostrarProdutos(produtosFiltrados);
}

function limparFiltros() {
  document.getElementById("pesquisa").value = "";
  document.getElementById("filtroCategoria").value = "Todos";

  mostrarProdutos(produtos);
}

function fileToDataURL(file) {
  return new Promise(function(resolve, reject) {
    let reader = new FileReader();
    reader.onload = function(e) {
      resolve(e.target.result);
    };
    reader.onerror = function(e) {
      reject(e);
    };
    reader.readAsDataURL(file);
  });
}

function filesToDataURLs(files) {
  let arr = Array.from(files || []);
  return Promise.all(arr.map(fileToDataURL));
}

function previewImagens(event) {
  let files = event.target.files;
  let preview = document.getElementById('previewCadastro');
  if (!preview) return;
  preview.innerHTML = '';
  if (!files || files.length === 0) return;

  filesToDataURLs(files).then(function(dataUrls) {
    dataUrls.forEach(function(url) {
      let img = document.createElement('img');
      img.src = url;
      img.alt = 'Preview';
      preview.appendChild(img);
    });
  }).catch(function() {
    preview.innerHTML = '';
  });
}

async function cadastrarProduto() {
  let nome = document.getElementById("nomeCadastro").value;
  let descricao = document.getElementById("descricaoCadastro").value;
  let preco = Number(document.getElementById("precoCadastro").value);
  let categoria = document.getElementById("categoriaCadastro").value;
  let tamanho = document.getElementById("tamanhoCadastro").value;
  let cor = document.getElementById("corCadastro").value;
  let quantidade = Number(document.getElementById("quantidadeCadastro").value);
  let inputImagem = document.getElementById("imagemCadastro");
  let mensagem = document.getElementById("mensagemCadastro");

  let files = inputImagem.files;

  if (nome === "" || descricao === "" || preco === 0 || tamanho === "" || cor === "" || quantidade === 0 || !files || files.length === 0) {
    mensagem.innerHTML = "Preencha todos os campos e anexe pelo menos uma imagem!";
    return;
  }

  let dataUrls;
  try {
    dataUrls = await filesToDataURLs(files);
  } catch (e) {
    mensagem.innerHTML = "Erro ao ler as imagens.";
    return;
  }

  let novoProduto = {
    id: Date.now(),
    nome: nome,
    descricao: descricao,
    preco: preco,
    categoria: categoria,
    tamanho: tamanho,
    cor: cor,
    imagens: dataUrls,
    quantidade: quantidade
  };

  produtosSalvos.push(novoProduto);

  localStorage.setItem("produtos", JSON.stringify(produtosSalvos));

  mensagem.innerHTML = "Produto cadastrado com sucesso!";

  limparCadastro();
  produtos = produtosIniciais.concat(produtosSalvos);
  mostrarProdutos(produtos);
}

function limparCadastro() {
  if (!document.getElementById("nomeCadastro")) {
    return;
  }

  document.getElementById("nomeCadastro").value = "";
  document.getElementById("descricaoCadastro").value = "";
  document.getElementById("precoCadastro").value = "";
  document.getElementById("tamanhoCadastro").value = "";
  document.getElementById("corCadastro").value = "";
  document.getElementById("quantidadeCadastro").value = "";
  let inputImagem = document.getElementById("imagemCadastro");
  if (inputImagem) {
    inputImagem.value = "";
  }

  let preview = document.getElementById("previewCadastro");
  if (preview) {
    preview.innerHTML = "";
  }
}

function enviarContato() {
  let nome = document.getElementById("nomeContato").value;
  let email = document.getElementById("emailContato").value;
  let mensagem = document.getElementById("mensagemContato").value;
  let resposta = document.getElementById("respostaContato");

  if (nome === "" || email === "" || mensagem === "") {
    resposta.innerHTML = "Preencha todos os campos antes de enviar.";
  } else {
    resposta.innerHTML = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
  }
}

function limparContato() {
  document.getElementById("nomeContato").value = "";
  document.getElementById("emailContato").value = "";
  document.getElementById("mensagemContato").value = "";
  document.getElementById("respostaContato").innerHTML = "";
}

function mostrarDica(texto) {
  document.getElementById("textoDica").innerHTML = texto;
}

function voltarInicio() {
  window.location.href = "index.html";
}

let pesquisa = document.getElementById("pesquisa");
let filtroCategoria = document.getElementById("filtroCategoria");

if (pesquisa && filtroCategoria) {
  pesquisa.addEventListener("input", filtrarProdutos);
  filtroCategoria.addEventListener("change", filtrarProdutos);
}

mostrarProdutos(produtos);
startCardCarousel();
mostrarCarrinho();
renderPayPalButtons();