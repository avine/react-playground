import React, { Component } from 'react';
import './App.css';

import Persons from './components/Persons/Persons';
import { IPerson } from './components/Persons/Person/Person';

interface IState {
  persons: IPerson[];
}

class App extends Component {
  public state: IState = {
    persons: [
      { id: 1, name: 'Stéphane' },
      { id: 2, name: 'Fleur' }
    ]
  };

  public changeHandler = (person: IPerson) => {
    this.setState((state: IState) => ({
      persons: state.persons.map(p => p.id === person.id ? person : p)
    }));
  };

  public render() {
    return (
      <div className="App">
        <Persons persons={this.state.persons} changeHandler={this.changeHandler} />
      </div>
    );
  }
}

export default App;
