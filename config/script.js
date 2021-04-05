//Cartas

var cartaMasterYi = {
    nome:"Master yi",
    atributos: {
        ataque:75,
        defesa:50,
        magia:0

    }
}

var cartaEkko = {
    nome:"Ekko",
    atributos: {     
        ataque:55,
        defesa:20,
        magia:65
    }
}

var cartaOlaf = {
    nome:"Olaf",
    atributos: {
        ataque:95,
        defesa:80,
        magia:0
    }
}

//variaveis

var cartaMaquina
var cartaJogador
var cartas = [cartaMasterYi, cartaEkko, cartaOlaf]
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

    exibirOpcoes()
}


//funçao exibir opçoes

function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
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
    var atributoSelecionado = obtemAtributoSelecionado()
    
   if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    alert("Você ganhou da maquina, parabens!")
   }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    alert("Você perdeu!")
   }else{
       alert("Empatou")
   }

   console.log(cartaMaquina)

}
