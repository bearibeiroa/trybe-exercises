import React, {Component} from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Components/Pokedex';
import Button from './Components/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickDefault:0,
    }
  }

  nextPokemon = () => {
    this.setState((prevState) => ({
      clickDefault: prevState.clickDefault + 1,
    }))
  }

  render() {
    const { clickDefault } = this.state;
    return (
      <div className="App">
        <h1>Pokedéx React - Estados e Eventos</h1>
        <Pokedex pokemons={pokemons} nextPokemon={clickDefault} />
        <Button handleClick={ this.nextPokemon } />
      </div>
    );
  }
}

export default App;
