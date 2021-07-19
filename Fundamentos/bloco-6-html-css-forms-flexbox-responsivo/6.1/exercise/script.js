function states() {
    const estados = [{ "label": "Acre", "value": "AC" }, { "label": "Alagoas", "value": "AL" }, { "label": "Amapá", "value": "AP" }, { "label": "Amazonas", "value": "AM" }, { "label": "Bahia", "value": "BA" }, { "label": "Ceará", "value": "CE" }, { "label": "Distrito Federal", "value": "DF" }, { "label": "Espírito Santo", "value": "ES" }, { "label": "Goiás'", "value": "GO" }, { "label": "Maranhão", "value": "MA" }, { "label": "Mato Grosso", "value": "MT" }, { "label": "Mato Grosso do Sul", "value": "MS" }, { "label": "Minas Gerais", "value": "MG" }, { "label": "Paraná", "value": "PR" }, { "label": "Paraíba", "value": "PB" }, { "label": "Pará", "value": "PA" }, { "label": "Pernambuco", "value": "PE" }, { "label": "Piau", "value": "PI" }, { "label": "Rio Grande do Norte", "value": "RN" }, { "label": "Rio Grande do Sul", "value": "RS" }, { "label": "Rio de Janeiro", "value": "RJ" }, { "label": "Rondônia", "value": "RO" }, { "label": "Roraima", "value": "RR" }, { "label": "Santa Catarina", "value": "SC" }, { "label": "Sergipe", "value": "SE" }, { "label": "São Paulo", "value": "SP" }, { "label": "Tocantins", "value": "TO" }];
    const select = document.querySelector('.option-state');
    for (let index of estados) {
        let option = document.createElement('option');
        option.innerHTML = index.label;
        option.value = index.value;
        select.appendChild(option);
    }
}
states()

function dateValidation() {
    const date = document.querySelector('#date').value;
    let arrayData = data.split(' ');
    for (let index = 0; index < arrayData.length; index += 1){
        if (index[2] == '/' && index[5] == '/' && !index[2] && !index[5]) {

        }
    }
}
