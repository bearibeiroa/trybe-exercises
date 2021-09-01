import React from 'react';
import Pokemon from './Pokemon';

{/* Nesse arquivo é onde eu listo os pokemons. Faço com eles apareçam na tela de forma dinâmica */}
class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
      </div>
    )
  }
}
export default Pokedex;
