let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavrasTentativa = tentativa > 1? 'tentativas' : 'tentativa';
    
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1','acertou!');
        let mensagemTentativas = `você acertou o número secreto com ${tentativa} ${palavrasTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas)
   
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','o número secreto é menor');
        } else{
            exibirTextoNaTela('p','o número secreto é maior');
        }
        tentativa++;
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}












