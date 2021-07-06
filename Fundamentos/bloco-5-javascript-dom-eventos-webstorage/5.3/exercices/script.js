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

// Exercício 1 - Inserir os dias do mês com as classes 'day' 'friday' 'holiday'

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function DaysOfTheMonth() {
    let getDaysList = document.querySelector('#days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        let dayNumber = document.createElement('li');

        if (day === 24 | day === 31) {
            dayNumber.className = 'day holiday';
            dayNumber.innerHTML = day;
            getDaysList.appendChild(dayNumber);
        } else if (day === 4 | day === 11 | day === 18) {
            dayNumber.className = 'day friday';
            dayNumber.innerHTML = day;
            getDaysList.appendChild(dayNumber);
        } else if (day === 25) {
            dayNumber.className = 'day holiday friday';
            dayNumber.innerHTML = day;
            getDaysList.appendChild(dayNumber);
        } else {
            dayNumber.className = 'day';
            dayNumber.innerHTML = day;
            getDaysList.appendChild(dayNumber);
        }
    }
}
DaysOfTheMonth();