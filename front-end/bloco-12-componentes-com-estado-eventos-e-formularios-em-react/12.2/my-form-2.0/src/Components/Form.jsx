import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Formulário React</h1>
        <fieldset>
            <legend>Dados pessoais</legend>
          <div className="container">
            <label htmlFor="name">
              Nome:
              <input
                type="name"
                name="name"
                maxLength="40"
                required
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                maxLength="50"
                required
              />
              </label>
          </div>
          <div className="container">
            <label htmlFor="cpf">
              CPF:
              <input
                type="number"
                name="cpf"
                maxLength="11"
                required
              />
              </label>
            <label htmlFor="adress">
              Endereço:
              <input
                type="text"
                name="adress"
                maxLength="200"
                required
              />
              </label>
          </div>
        </fieldset>
      </div>

    );
  }
}

export default Form;

