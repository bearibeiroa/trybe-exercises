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