//fazendo a lista
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
//fazendo as variáveis
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//fazendo mudanças no HTML
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

//função para verificar o chute do jogador
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parábens, você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);

        //código para ativar o botão
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Errado, o número secreto é menor. Tente denovo');
        } else if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'Errado, o número secreto é maior. Tente denovo');
        }
        tentativas++;
        limparCampo()
    }
}

//função para gerar número aleatório
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;

    if (quantidadeDeElementos == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
//a > b ? a : b;

//função para apagar o input do jogador
function limparCampo() {
    chute = document.querySelector(' input');
    chute.value = '';
}

// função para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    //código para desativar o botão
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
