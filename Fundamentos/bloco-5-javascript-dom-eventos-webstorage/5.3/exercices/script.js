function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/*1. Insira os dias de dezembro*/
function decemberDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDays = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const daysOfTheMonth = dezDaysList[index];
        const daysMonthList = document.createElement('li');
        daysMonthList.innerHTML = daysOfTheMonth;
        daysMonthList.classList.add('day');
        if (daysOfTheMonth === 24 | daysOfTheMonth === 31) {
            daysMonthList.classList.add('holiday');
        }
        if (daysOfTheMonth === 4 | daysOfTheMonth === 11 | daysOfTheMonth === 18) {
            daysMonthList.classList.add('friday');
        }
        if (daysOfTheMonth === 25) {
            daysMonthList.classList.add('friday', 'holiday');
        }
        monthDays.appendChild(daysMonthList);
    }
}
decemberDays()

/* 2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados". */

function holidays(string) {
    const buttonFather = document.querySelector('.buttons-container');
    const createButton = document.createElement('button');
    createButton.innerHTML = string;
    createButton.id = 'btn-holiday';
    buttonFather.appendChild(createButton);
}
holidays('Feriados');

/* 3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday". */

function holidaysShow() {
    const buttonFeriados = document.querySelector('#btn-holiday');
    const feriados = document.querySelectorAll('.holiday');
    buttonFeriados.addEventListener('click', function() {
        for (let index = 0; index < feriados.length; index += 1) {
            if (feriados[index].style.backgroundColor === "rgb(238, 238, 238)") {
                feriados[index].style.backgroundColor = "lightgreen";
            } else {
                feriados[index].style.backgroundColor = "rgb(238, 238, 238)";
            }
        }

    })
};
holidaysShow();

/* 4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira". */

function FridayDay(string) {
    const buttonPai = document.querySelector('.buttons-container');
    const fridayButton = document.createElement('button');
    fridayButton.innerHTML = string;
    fridayButton.id = "btn-friday";
    buttonPai.appendChild(fridayButton);
}
FridayDay("Sexta-feira");
/* 5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira. */

function sextou(arrayDezFriday) {
    const fridayButton = document.querySelector('#btn-friday');
    const fridayDays = document.querySelectorAll('.friday');
    const newText = 'SEXTOU :)'
    fridayButton.addEventListener('click', function() {
        for (let index = 0; index < fridayDays.length; index += 1) {
            if (fridayDays[index].innerHTML !== newText) {
                fridayDays[index].innerHTML = newText;
            } else {
                fridayDays[index].innerHTML = arrayDezFriday[index];
            }
        }
    })
}
const arrayDezFriday = [4, 11, 18, 25];
sextou(arrayDezFriday);