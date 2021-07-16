function states() {
    const estados = [{ "label": "Acre", "value": "AC" }, { "label": "Alagoas", "value": "AL" }, { "label": "Amapá", "value": "AP" }, { "label": "Amazonas", "value": "AM" }, { "label": "Bahia", "value": "BA" }, { "label": "Ceará", "value": "CE" }, { "label": "Distrito Federal", "value": "DF" }, { "label": "Espírito Santo", "value": "ES" }, { "label": "Goiás'", "value": "GO" }, { "label": "Maranhão", "value": "MA" }, { "label": "Mato Grosso", "value": "MT" }, { "label": "Mato Grosso do Sul", "value": "MS" }, { "label": "Minas Gerais", "value": "MG" }, { "label": "Paraná", "value": "PR" }, { "label": "Paraíba", "value": "PB" }, { "label": "Pará", "value": "PA" }, { "label": "Pernambuco", "value": "PE" }, { "label": "Piau", "value": "PI" }, { "label": "Rio Grande do Norte", "value": "RN" }, { "label": "Rio Grande do Sul", "value": "RS" }, { "label": "Rio de Janeiro", "value": "RJ" }, { "label": "Rondônia", "value": "RO" }, { "label": "Roraima", "value": "RR" }, { "label": "Santa Catarina", "value": "SC" }, { "label": "Sergipe", "value": "SE" }, { "label": "São Paulo", "value": "SP" }, { "label": "Tocantins", "value": "TO" }];
    const select = document.querySelector('.option-city');
    for (let index of estados) {
        let option = document.createElement('option');
        option.innerText = index.label;
        option.value = index.value;
        select.appendChild(option);
    }
}
states()


const submit = document.querySelector('#submit');

function checkDate() {
    const dateField = document.querySelector('.date-set').value;
    const dateArray = dateField.split('/')
    const date = parseInt(dateArray[0]);
    const month = parseInt(dateArray[1]);
    const year = parseInt(dateArray[2]);
    if (!date > 0 && date <= 31) {
        return { message: 'Data não foi preenchida!' }

    }
}
submit.addEventListener('click', checkDate)