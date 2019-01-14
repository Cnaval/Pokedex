import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
  };

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}
export default Row;
