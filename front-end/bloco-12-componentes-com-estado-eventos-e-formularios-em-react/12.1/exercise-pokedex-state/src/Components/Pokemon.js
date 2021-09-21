import React from 'react';
import PropTypes from 'prop-types';

/* Nesse arquivo é onde eu defino os elementos que quero na tela e a disposição deles*/
class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <div className="pokemon-card">
        <div>
          <img src={ image } alt={ `Pokemon ${name}` }/>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>{`Average wight: ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
        </div>
      </div>
    )
  }
}
Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
