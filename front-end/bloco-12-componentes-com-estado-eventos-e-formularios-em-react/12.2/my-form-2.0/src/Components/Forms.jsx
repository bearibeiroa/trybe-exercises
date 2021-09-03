import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <div>
        <h1>Formulário React</h1>
        <fieldset>
            <legend>Dados pessoais</legend>
            <div className="container">
              Nome:
              <input
                type="name"
                name="name"
                maxLength="40"
                required
              />
            </div>
        </fieldset>
      </div>

    );
  }
}

export default Forms;

