
const secoes = [
    document.querySelector('#container1'),
    document.querySelector('#sobremim'),
    document.querySelector('#projetos'),
    document.querySelector('#contato')
]

let indiceAtual = 0;
let Bloqueio = false;

function atualizarFoco() {
    secoes.forEach(function(secao, index) {
        if (index === indiceAtual) {
            secao.classList.remove('fora-de-foco');
        } else {
            secao.classList.add('fora-de-foco');
        }
    });
}

atualizarFoco();

window.addEventListener('wheel', function(e){
    if(Bloqueio) return;
    Bloqueio = true;

if(e.deltaY>0 && indiceAtual < secoes.length - 1){
    indiceAtual++;
}
else if(e.deltaY<0 && indiceAtual > 0){
    indiceAtual--;
}

    secoes[indiceAtual].scrollIntoView({behavior: 'smooth'});
    setTimeout(function(){
        Bloqueio = false;
    }, 1000);
    atualizarFoco();
}   )