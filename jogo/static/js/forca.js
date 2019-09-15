let tentativas = 5;
let resposta;
let resultado; 

function lerTexto(tipo){
    return prompt('Digite '+tipo);
}

function vetoriar(valor){
    return valor.split('');
}

function reiniciar(){
    tentativas=5;
    document.querySelectorAll('aside')[2].innerHTML = '<button onclick="definirResposta()">Definir Resposta</button>';
    document.querySelector('h3').innerHTML = 'Letras já inseridas:';
    document.querySelector('aside p').innerHTML = `${tentativas}`;
    document.querySelector('img').src = '/static/img/forca/forca5.png';
    document.querySelector('div').innerHTML = '';

}
function fazerQuadradinhos(vetor){
    for(let item=0;item<vetor.length;item++){
        document.querySelector('div').innerHTML += `<input type="text" value="?" disabled>`;
    }

}

function definirResposta(){
    reiniciar();
    let palavra = lerTexto('a resposta');
    resposta = vetoriar(palavra);
    let dica = lerTexto('uma dica');
    document.querySelector('h2').innerHTML = `Dica: ${dica}`;
    fazerQuadradinhos(resposta);
    document.querySelectorAll('aside')[2].innerHTML += '<button onclick="iniciar()">Iniciar</button>';
}

// verificador pra ver se todos os quadradinho foram preenchidos
function verificarJogo(){
    if(tentativas<=0){
        document.querySelectorAll('aside')[2].innerHTML = '<button onclick="definirResposta()">Definir Resposta</button>';
        return alert('vc perdeu');
    }
    let contador=0;
    for(let verificador of document.querySelectorAll('input')){
        if (verificador.value != '?'){
            contador++;
            if(contador==resposta.length){
                document.querySelectorAll('aside')[2].innerHTML = '<button onclick="definirResposta()">Definir Resposta</button>';
                return alert('vc ganhou');
            }
        }
    }

}

function iniciar(){
    document.querySelectorAll('button')[1].innerHTML = 'chutar';
    resultado = false;
    let letras = lerTexto('uma letra da palavra');
    document.querySelector('h3').innerHTML += ` ${letras}`;
    vetoriar(letras);
    // comparar a letra com o vetor resposta
    for (let i=0;i<resposta.length;i++){
        for (letra of letras){
            if(letra == resposta[i]){
                document.querySelectorAll('input')[i].value = letra;
                resultado=true;  
            }
        }
    }
    if(resultado==false){
        tentativas--;
    }
    document.querySelector('aside p').innerHTML = `${tentativas}`;
    document.querySelector('img').src = `/static/img/forca/forca${tentativas}.png`;
    verificarJogo();
}
