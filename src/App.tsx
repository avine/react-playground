import React, { Component } from 'react';
import './App.css';

import Persons from './components/Persons/Persons';
import { IPerson } from './components/Persons/Person/Person';

interface IAppProps {
  title: string;
}

interface IAppState {
  persons: IPerson[];
}

class App extends Component<IAppProps, IAppState> {
  public state: IAppState = {
    persons: [
      { id: 1, name: 'Stéphane' },
      { id: 2, name: 'Fleur' }
    ]
  };

  public changeHandler = (person: IPerson) => {
    this.setState((state: IAppState) => ({
      persons: state.persons.map(p => p.id === person.id ? person : p)
    }));
  };

  constructor(props: IAppProps) {
    super(props);
  }

  public render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <Persons persons={this.state.persons} changeHandler={this.changeHandler} />
      </div>
    );
  }
}

export default App;
