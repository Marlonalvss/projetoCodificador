var botaoCifra = document.getElementById("codCesar")//VARIÁVEL CRIADA PARA PEGAR O BOTÃO CODIFICAR NO HTML.
var botaoCifraDecod = document.getElementById("decodCesar")//VARIÁVEL CRIADA PARA PEGAR O BOTÃO DECODIFICAR NO HTML.
botaoCifra.addEventListener("click", conversaoCesar)//ADICIONADO UM EVENTO AO BOTÃO JUNTO DE UMA FUNÇÃO PARA
// SER EXECUTADA AO CLICAR. 

botaoCifraDecod.addEventListener("click",DecodificacaoCesar)
 
function conversaoCesar(){
    var pegaEntrada = document.getElementById("entradaText")//VAR QUE PEGA A PRIMEIRA CAIXA DE TEXTO NO HTML.
    var pegaSaida = document.getElementById("saidaText")//VAR QUE PEGA A SEGUNDA CAIXA DE TEXTO NO HTML.
    var deslocamento = Number(document.getElementById("desloc").value)//VAR QUE PEGA O INPUT ONDE É PASSADO O Nº DE DESLOCAMENTO.
    var textoEntrada = pegaEntrada.value
    var textoSaida = ""

    for(i = 0; i < textoEntrada.length; i++){
        var conversao = textoEntrada.charCodeAt(i) + deslocamento
        var charcodeToString = String.fromCharCode(conversao);
        textoSaida += charcodeToString
    }
 
        pegaSaida.innerText = textoSaida

}

function DecodificacaoCesar(){
    var pegaEntrada = document.getElementById("entradaText")
    var pegaSaida = document.getElementById("saidaText")
    var deslocamento = Number(document.getElementById("desloc").value)
    var textoEntrada = pegaEntrada.value
    var textoSaida = ""

    for(i = 0; i < textoEntrada.length; i++){
        
        var conversao = textoEntrada.charCodeAt(i) - deslocamento
        var charcodeToString = String.fromCharCode(conversao);
        textoSaida += charcodeToString
    }
        pegaSaida.innerText = textoSaida

}