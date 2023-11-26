const btnOxe = document.getElementById("btn1");
const btnNovin = document.getElementById("btn2");

const btnNo = document.getElementById("no");
const btnSim = document.getElementById("sim");


const tela1 = document.getElementById("pt1");
const tela2 = document.getElementById("pt2");
const tela3 = document.getElementById("pt3");

const musica1 = new Audio('notas/la-.mp3');
const musica2 = new Audio('notas/la-.mp3');
const musica3 = new Audio('notas/la-.mp3');



btnOxe.addEventListener('click', function(){
    tela1.style.display = "none";
    tela2.style.display = "flex";
    tela3.style.display = "none";
})
btnNovin.addEventListener('click', function(){
    tela1.style.display = "none";
    tela2.style.display = "flex";
    tela3.style.display = "none";
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
    tela1.style.display = "none";
    tela2.style.display = "none";
    tela3.style.display = "flex";
})