cartaEkko = {
    nome:"Ekko",
    imagem:"https://th.bing.com/th/id/OIP.EW2dPPKMlAtX8d09IudRYAHaEK?w=315&h=180&c=7&o=5&pid=1.7",
    atributos: {
        Attack: 50,
        Armor: 30,
        AttackSpeed: 40
    }
}

cartaGaren = {
    nome:"Garen",
    imagem:"https://th.bing.com/th/id/OIP.O3AmaAiOuZERb5_fYm6NsAHaDt?w=328&h=175&c=7&o=5&pid=1.7",
    atributos: {
        Attack: 50,
        Armor: 70,
        AttackSpeed: 10
    }
}

cartaMasterYi = {
    nome:"MasterYi",
    imagem:"https://th.bing.com/th/id/OIP.03eDYm8n1OiekstS1IktzQHaFl?w=234&h=180&c=7&o=5&pid=1.7",
    atributos: {
        Attack: 80,
        Armor: 15,
        AttackSpeed: 80
    }
}

cartaMissFortune = {
    nome:"MissFortune",
    imagem:"https://th.bing.com/th/id/OIP.RDUgTJrTv0Dxc6KtU8-LiwHaNL?w=182&h=324&c=7&o=5&pid=1.7",
    atributos: {
        Attack: 40,
        Armor: 20,
        AttackSpeed: 50
    }

}




//variaveis

var cartaMaquina
var cartaJogador
var cartas = [cartaMasterYi, cartaEkko, cartaGaren, cartaMissFortune]
              //0            1          2

//Funçao Atualizar Placar
var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()

atualizaQuantidadeDeCarta()

function atualizaQuantidadeDeCarta() {
    var divQuantidadeCartas =  document.getElementById("quantidade-cartas")
    var html = "Quantidade de cartas no jogo: " + cartas.length
    
    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar () {
    var divPlacar = document.getElementById("placar")
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Maquina"

    divPlacar.innerHTML = html
}

//Funçao sortear carta 

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math. random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]

    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math. random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]

    cartas.splice(numeroCartaJogador, 1)

   

    
    
    //Desabilita e abilita botao

    document. getElementById('btnSortear'). disabled = true
    document. getElementById('btnJogar'). disabled = false

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

    pontosJogador++

   }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = `<p class="resultado-final"> Você perdeu, mais sorte na proxima. </p>`

    pontosMaquina++
    
   }else{
    htmlResultado = `<p class="resultado-final"> Empatou, tente novamente </p>`
   }

   if(cartas.length == 0) {
       alert("Fim de jogo")
       if(pontosMaquina > pontosMaquina ) {
           htmlResultado = '<p class="resultado-final>Parabens você ganhou!</p>" '
       }else if(pontosMaquina > pontosJogador) {
           htmlResultado = '<p class="resultado-final>Infelizmente você perdeu, mais sorte na proxima.</p>" '
       }else{
           htmlResultado = '<p class="resultado-final>Empatou!</p>" '
       }
   }else{
       document.getElementById("btnProximaRodada").disabled = false
   }

   divResultado.innerHTML = htmlResultado

   document.getElementById("btnJogar").disabled = true

   atualizaPlacar()
   exibeCartaMaquina()
   atualizaQuantidadeDeCarta()
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

function proximaRodada() {
    var divCartas = document.getElementById("cartas")

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById("btnSortear").disabled = false
    document.getElementById("btnJogar").disabled = true
    document.getElementById("proximaRodada").disabled = true

    var divResultado = document.getElementById("resultado")

    divResultado.innerHTML = ""
}
