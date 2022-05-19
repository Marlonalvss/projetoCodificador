var botaoCifra = document.getElementById("codCesar")//VARIÁVEL CRIADA PARA PEGAR O BOTÃO CODIFICAR NO HTML.
var botaoCifraDecod = document.getElementById("decodCesar")//VARIÁVEL CRIADA PARA PEGAR O BOTÃO DECODIFICAR NO HTML.
botaoCifra.addEventListener("click", conversaoCesar)//ADICIONADO UM EVENTO AO BOTÃO JUNTO DE UMA FUNÇÃO PARA
// SER EXECUTADA AO CLICAR. 

botaoCifraDecod.addEventListener("click", DecodificacaoCesar) // ADICIONADO UM EVENTO DE CLICK E UMA FUNÇÃO
// AO DECODIFICADOR PARA QUANDO CLICADO A FUNÇÃO SER ACIONADA.

function conversaoCesar() {
    var pegaEntrada = document.getElementById("entradaText")//VAR QUE PEGA A PRIMEIRA CAIXA DE TEXTO NO HTML.
    var pegaSaida = document.getElementById("saidaText")//VAR QUE PEGA A SEGUNDA CAIXA DE TEXTO NO HTML.
    var deslocamento = Number(document.getElementById("desloc").value)//VAR QUE PEGA O INPUT ONDE É PASSADO O Nº DE DESLOCAMENTO.
    var textoEntrada = pegaEntrada.value //AQUI ELE PEGA O VALOR QUE FOR PASSADO NA PRIMEIRA CAIXA E GUARDA.
    var textoSaida = "" // AQUI É UMA SAÍDA VAZIA. ( POR ENQUANTO.) 

    for (i = 0; i < textoEntrada.length; i++) { // REPETIÇÃO PARA PASSAR LETRA POR LETRA PEGANDO SEU CHARCODE.
        var conversao = textoEntrada.charCodeAt(i) + deslocamento// AQUI VOCÊ TEM UMA NOVA VARIÁVEL QUE 
        // VAI PEGAR O VALOR QUE FOR PASSADO NO TEXTO DE ENTRADA E VAI SOMAR COM O DESLOCAMENTO// POR EXEMPLO
        // A LETRA " A " NO CHARCODE É 65, OU SEJA + A POSIÇÃO SERÁ ASSIM 65 + 5 = 70.

        var charcodeToString = String.fromCharCode(conversao); // AQUI ELE PEGA O VALOR EM CHARCODE E TRANSFORMA 
        // EM STRING NOVAMENTE. EXEMPLO SE O RESULTADO FOSSE = 65, LOGO ELE SE TORNA "A"

        textoSaida += charcodeToString // AQUI ELE VAI PEGAR O TEXTO SAÍDA QUE ESTAVA VAZIO E VAI GUARDAR O RESULTADO DA CONVERSÃO.
        //
    }

    pegaSaida.innerText = textoSaida // AQUI ELE IRÁ PEGAR O VALOR QUE FOI GUARDADO NO TEXTO SAÍDA
    // E IRÁ COLOCAR DENTRO DO TEXTO INTERNO DA CAIXA DE SAIDA, OU SEJA APÓS TODA A CONVERSÃO ELE 
    // SÓ ESTÁ REPASSANDO A RESPOSTA PARA CAIXA 2.

}

// A FUNÇÃO DECODIFICAR RECEBE EXATAMENTE TODAS  AS INSTRUÇÕES COM EXCESSÃO DE QUÊ, AO INVÉS DE VOCÊ
// COLOCAR POSIÇÃO + DESLOCAMENTO, VOCÊ IRÁ COLOCAR POSIÇÃO - DESLOCAMENTO. 
function DecodificacaoCesar() {
    var pegaEntrada = document.getElementById("entradaText")
    var pegaSaida = document.getElementById("saidaText")
    var deslocamento = Number(document.getElementById("desloc").value)
    var textoEntrada = pegaEntrada.value
    var textoSaida = ""

    for (i = 0; i < textoEntrada.length; i++) {

        var conversao = textoEntrada.charCodeAt(i) - deslocamento
        var charcodeToString = String.fromCharCode(conversao);
        textoSaida += charcodeToString
    }
    pegaSaida.innerText = textoSaida


}

/* --------------- BASE 64 CODIFICAR E DECODIFICAR ------------- */

var botao64 = document.getElementById("cod64")
var botao64Decod = document.getElementById("decod64")
botao64.addEventListener("click", conversaoB64)
botao64Decod.addEventListener("click", DecodificacaoB64)

function conversaoB64() {
    var pegaEntrada = document.getElementById("entradaText")
    var pegaSaida = document.getElementById("saidaText")
    var textoEntrada = pegaEntrada.value

    var palavraConvertida = btoa(textoEntrada); // "btoa" no Javascript faz a função de converter a string em 
    // base64 automaticamente. ou seja só foi necessário pegar o valor e passar dentro do btoa.
    pegaSaida.innerText = palavraConvertida
}

function DecodificacaoB64() {
    var pegaEntrada = document.getElementById("entradaText")
    var pegaSaida = document.getElementById("saidaText")
    var textoEntrada = pegaEntrada.value

    var palavraConvertida = atob(textoEntrada);// "atob" no Javascript faz a função de converter a codificação em 
    // string automaticamente. ou seja só foi necessário pegar o valor e passar dentro do atob.
    pegaSaida.innerText = palavraConvertida
}