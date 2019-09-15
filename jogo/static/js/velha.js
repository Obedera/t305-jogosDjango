let quadradinhos = document.querySelectorAll("div");
let jogador = 2;
function mudarImg(event){
    if (event.target.style.backgroundImage == ''){
        if((jogador%2)==0){
            event.target.style.backgroundImage = 'url(../static/img/velha/x.png)';
            event.target.classList.add('x');
        }
        else{
            event.target.style.backgroundImage = 'url(../static/img/velha/o.png)';
            event.target.classList.add('o');
        }
        jogador++;
        verificar();
    }
}

for(let quadradinho of quadradinhos){
    quadradinho.onclick = mudarImg;
}

function zerar(){
    jogador=2;
    for(let item of quadradinhos){
        item.style.backgroundImage = '';
        item.classList.remove('x');
        item.classList.remove('o');

    }
}

function pegar(lista){
    let quadrados = [];
    for (let i = 0; i<lista.length;i++){
        if(lista[i].classList.contains('x')){
            quadrados[i] = 'x';
        }
        else if(lista[i].classList.contains('o')){
            quadrados[i] = 'o';
        }
    }
    return quadrados;
}

function verificar(){
    // q = quadradinho verificador    
    q = pegar(quadradinhos);

    // x ganha
    if((q[0]=='x')&&(q[1]=='x')&&(q[2]=='x')){
        zerar();
        return alert('jogador do x ganhou');
    }
    if((q[3]=='x')&&(q[4]=='x')&&(q[5]=='x')){
        zerar();
        return alert('jogador do x ganhou');
    }
    if((q[6]=='x')&&(q[7]=='x')&&(q[8]=='x')){
        zerar();
        return alert('jogador do x ganhou');
    }

    if((q[0]=='x')&&(q[3]=='x')&&(q[6]=='x')){
        zerar();
        return alert('jogador do x ganhou');
    }
    if((q[1]=='x')&&(q[4]=='x')&&(q[7]=='x')){
        zerar();
        return alert('jogador do x ganhou');
    }
    if((q[2]=='x')&&(q[5]=='x')&&(q[8]=='x')){
        zerar();
        return alert('jogador do x ganhou');
    }

    if((q[0]=='x')&&(q[4]=='x')&&(q[8]=='x')){
        zerar();
        return alert('jogador do x ganhou');
    }
    if((q[2]=='x')&&(q[4]=='x')&&(q[6]=='x')){
        zerar();
        return alert('jogador do x ganhou');
    }

    // circulo ganha

    if((q[0]=='o')&&(q[1]=='o')&&(q[2]=='o')){
        zerar();
        return alert('jogador do o ganhou');
    }
    if((q[3]=='o')&&(q[4]=='o')&&(q[5]=='o')){
        zerar();
        return alert('jogador do o ganhou');
    }
    if((q[6]=='o')&&(q[7]=='o')&&(q[8]=='o')){
        zerar();
        return alert('jogador do o ganhou');
    }

    if((q[0]=='o')&&(q[3]=='o')&&(q[6]=='o')){
        zerar();
        return alert('jogador do o ganhou');
    }
    if((q[1]=='o')&&(q[4]=='o')&&(q[7]=='o')){
        zerar();
        return alert('jogador do o ganhou');
    }
    if((q[2]=='o')&&(q[5]=='o')&&(q[8]=='o')){
        zerar();
        return alert('jogador do o ganhou');
    }

    if((q[0]=='o')&&(q[4]=='o')&&(q[8]=='o')){
        zerar();
        return alert('jogador do o ganhou');
    }
    if((q[2]=='o')&&(q[4]=='o')&&(q[6]=='o')){
        zerar();
        return alert('jogador do o ganhou');
    }
    // velha
    if((q[0]!=null) && (q[1]!=null) && (q[2]!=null) && (q[3]!=null) && (q[4]!=null) && (q[5]!=null) && (q[6]!=null) && (q[7]!=null) && (q[8]!=null)){
        zerar();
        return alert('Deu velha');
    }

}
