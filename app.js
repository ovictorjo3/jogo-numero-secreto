let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2})
}

function exibirMensagemInicial()
{
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavrasTentativa = tentativa > 1? 'tentativas' : 'tentativa';

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1','acertou!');
        let mensagemTentativas = `você acertou o número secreto com ${tentativa} ${palavrasTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
   
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','o número secreto é menor');
        } else{
            exibirTextoNaTela('p','o número secreto é maior');
        }

        tentativa++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let qtdElementosLista = listaNumerosSorteados.length;

    if(qtdElementosLista == numeroLimite){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaNumerosSorteados.push(numeroEscolhido);
        //console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;

    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);


}










