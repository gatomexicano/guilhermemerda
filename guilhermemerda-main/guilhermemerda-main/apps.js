function criaCartao(categoria, pergunta, resposta) {

    let container = document.getElementById(container)
    let cartao = document.createElement(article)
    cartao.classname = cartao
    
}

let respostaEstaVisivel = false
container.appendChild(cartao)

function viraCartao () {
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toogle(active, respostaEstaVisivel)
    }

    cartao.addEventListener(click, viraCartao)

    cartao.innerHTML = `
    <div class=”cartao__conteudo”>
    <h3>${categoria}</h3>
    <div class=”cartao__conteudo__pergunta”>
    <p>${pergunta}</p>
    </div>
    <div class=”cartao__conteudo__resposta”>
    <p>${resposta}</p>
    </div>
    </div>
    `