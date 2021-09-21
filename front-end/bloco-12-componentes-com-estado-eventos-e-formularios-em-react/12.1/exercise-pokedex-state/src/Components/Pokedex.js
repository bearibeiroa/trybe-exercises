import React from 'react';
import Pokemon from './Pokemon';

/* Nesse arquivo é onde eu listo os pokemons. Faço com que eles apareçam na tela de forma dinâmica através de um map() */
class Pokedex extends React.Component {
  render() {
    const { pokemons, nextPokemon } = this.props;
    return (
      <div className="pokemon-map">
        {/* {pokemons.map(item => <Pokemon key={item.id} pokemon={item} />)} */}
        <Pokemon pokemon={pokemons[nextPokemon]} />
      </div>
    )
  }
}
export default Pokedex;
