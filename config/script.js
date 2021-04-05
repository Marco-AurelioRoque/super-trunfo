
//variaveis

var cartaMaquina
var cartaJogador
var cartas = [cartaMasterYi, cartaEkko, cartaGaren, cartaMissFortune]
              //0            1          2

//Funçao sortear carta 

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)

    while(numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random() * 3)

    } 
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

//Desabilita e abilita botao

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()

}

function exibeCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    divCartaJogador.style.backgroundImage= `url(${cartaJogador.imagem})`

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}



//Funçao Obtem atributo selecionado
 
function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for(var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

//funçao jogar

function jogar(){
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    
   if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = `<p class="resultado-final"> Você ganhou, parabens </p>`
   }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = `<p class="resultado-final"> Você perdeu, mais sorte na proxima. </p>`
   }else{
    htmlResultado = `<p class="resultado-final"> Empatou, tente novamente </p>`
   }

   divResultado.innerHTML = htmlResultado

   exibeCartaMaquina()
}

function exibeCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    divCartaMaquina.style.backgroundImage= `url(${cartaMaquina.imagem})`

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for(var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type='texto' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}
