import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1> Pokedex | Estados e Eventos em React </h1>
      <p>Exercícios do Bloco 12.1</p>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
