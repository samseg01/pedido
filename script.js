const btnOxe = document.getElementById("btn1");
const btnNovin = document.getElementById("btn2");
const btnInicia = document.getElementById("inicia");

const btnNo = document.getElementById("no");
const btnSim = document.getElementById("sim");

const telaBtn = document.getElementById("selec-button");
const tela1 = document.getElementById("pt1");
const tela2 = document.getElementById("pt2");
const tela3 = document.getElementById("pt3");

const musica1 = new Audio('mcs1.mp3');
const musica2 = new Audio('mcs2.mp3');
const musica3 = new Audio('mcs3.mp3');

btnInicia.addEventListener('click', function(){
    musica1.play();
    tela1.style.display = "flex";
    tela2.style.display = "none";
    tela3.style.display = "none";
    btnInicia.style.display = "none";
    telaBtn.style.display = "none";
})

btnOxe.addEventListener('click', function(){
    musica1.pause();
    musica2.play();
    tela1.style.display = "none";
    tela2.style.display = "flex";
    tela3.style.display = "none";
    telaBtn.style.display = "none";
})
btnNovin.addEventListener('click', function(){
    musica1.pause();
    musica2.play();
    tela1.style.display = "none";
    tela2.style.display = "flex";
    tela3.style.display = "none";
    telaBtn.style.display = "none";
})

btnNo.addEventListener('mouseover', function(){
    btnNo.style.top = random(90) + '%';
    btnNo.style.left = random(90) + '%';
})

function random(limite){
    var num = Math.floor(Math.random()*limite);
    return num;    
}

btnSim.addEventListener('click', function(){
    musica2.pause();
    musica3.play();
    tela1.style.display = "none";
    tela2.style.display = "none";
    tela3.style.display = "flex";
})
