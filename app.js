/*let titulo = document.querySelector('h1');
titulo.innerHTML='Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
ESTA FORMA MAIS EXTENSA PODE SER SUBSTITUÍDA PELA FUNÇÃO ABAIXO
*/
let numerosSorteados = [];
let numeroSecreto = randomNumber();
let tentativas=1;
function nomearTags(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML=texto;
};
function mensagemInicial(){
    nomearTags('h1', 'Jogo do número secreto');
    nomearTags('p', 'Escolha um número entre 1 e 100');
};

mensagemInicial();

function randomNumber(){
    let numeroMaximo = 100;
    let numeroEscolhido = parseInt(Math.random()*numeroMaximo+1);
    let tamanhoLista = numerosSorteados.length;
    if (tamanhoLista == numeroMaximo){
        numerosSorteados = []
    };

    if (numerosSorteados.includes(numeroEscolhido)){
        return randomNumber();
    }else{
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
 };


 let chute = document.querySelector('input').value;
 function verificarChute(){
    chute = document.querySelector('input').value;
    if (numeroSecreto == chute) {
        
        let palavra = tentativas > 1 ? 'tentativas' : 'tentativa';
        nomearTags('h1', 'Parabéns!');
        nomearTags('p',`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavra}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroSecreto > chute){
            nomearTags('h1', 'Tente Novamente');
            nomearTags('p', 'Você errou, tente um número maior que ' + chute);
        } else {
            nomearTags('h1', 'Tente Novamente');
            nomearTags('p', 'Você errou, tente um número menor que ' + chute);
        }
        tentativas++;
    }
    limparCampo();
 }

 function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';  
 };

 function reiniciar(){
    numeroSecreto = randomNumber();
    tentativas=1;
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
 };