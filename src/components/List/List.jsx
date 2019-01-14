import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../Row/Row';

class List extends Component {
  static propTypes = {
    pokemons: PropTypes.array,
  };

  render() {
    return (
      <ul>
        { this.props.pokemons.map(pokemon => (<Row name={pokemon.name} />))}
      </ul>
    );
  }
}
export default List;
