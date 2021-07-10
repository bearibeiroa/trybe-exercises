const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?*/

function addClassClick(event) {
    const techElement = document.querySelector('.tech');
    techElement.classList.remove("tech");
    event.target.classList.add("tech");
}
firstLi.addEventListener('click', addClassClick);
secondLi.addEventListener('click', addClassClick);
thirdLi.addEventListener('click', addClassClick);

/* 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech'; */

function changeText() {
    const techElement = document.querySelector('.tech');
    techElement.innerText = input.value;
}
input.addEventListener('keyup', changeText);


/* 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio? */
function redirectiClick() {
    window.location.href = "https://bearibeiroa.github.io/portfolio";
}
myWebpage.addEventListener('dblclick', redirectiClick);

/* 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo; */

function mouseMovimentIn() {
    myWebpage.style.color = 'red'
}
myWebpage.addEventListener('mouseover', mouseMovimentIn);

function mouseMovimentOut() {
    myWebpage.style.color = 'white'
}
myWebpage.addEventListener('mouseleave', mouseMovimentOut);


function resetText(event) {
    event.target.innerText = 'Opção reiniciada';
}
firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);