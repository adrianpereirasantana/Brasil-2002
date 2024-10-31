alert("BRASIL")
 function criarcartao(pergunta,resposta){
      let conteudo = document.getElementById("conteudo")
      let cartao = document.createElement('article')
      cartao.classList = "cartao"


    cartao.innerHTML = `
     <div class="cartao--conteudo">
                <div class="cartao--pergunta"</p> em que país aconteceu a copa de 2002?</p></div>
                <div class="cartao--resposta"</p> japão e coreia do sul</p></div>
                </div>
    `

      conteudo.appendChild(cartao)

 }
  criarcartao(1,2)