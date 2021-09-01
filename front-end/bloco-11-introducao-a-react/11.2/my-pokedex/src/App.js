import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Components/Pokedex'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex criado com React através de Componentes</h1>
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
