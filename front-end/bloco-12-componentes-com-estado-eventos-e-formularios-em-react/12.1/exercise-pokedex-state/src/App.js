import React, {Component} from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Components/Pokedex';
import Button from './Components/Button';

class App extends Component {
  constructor() {
    super();
    this.state
  }

  render() {
    return (
      <div className="App">
        <h1>Pokedéx React - Estados e Eventos</h1>
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
