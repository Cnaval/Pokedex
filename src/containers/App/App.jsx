import React, { Component, Fragment } from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import HeaderTable from '../../components/HeaderTable/HeaderTable';
import List from '../../components/List/List';
import CallToApi from '../../service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    CallToApi()
      .then(parsedJSON => this.setNewState(parsedJSON.results));
  }

  setNewState = (pokemons) => {
    this.setState({
      pokemons,
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <HeaderTable />
        <List pokemons={this.state.pokemons} />
      </Fragment>
    );
  }
}

export default App;
