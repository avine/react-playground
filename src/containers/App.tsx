import React, { Component } from 'react';
import './App.css';

import Persons from '../components/Persons/Persons';
import Header from '../components/Header/Header';
import { IPerson } from '../components/Persons/Person/Person';

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

  public removeHandler = (person: IPerson) => {
    this.setState((state: IAppState) => ({
      persons: state.persons.filter(p => p.id !== person.id)
    }));
  };

  // constructor(props: IAppProps) {
  //   super(props);
  // }

  public render() {
    return (
      <div className="App">
        <Header title="React playground" />
        {
          this.state.persons.length
          ? <Persons 
              persons={this.state.persons} 
              changeHandler={this.changeHandler} 
              removeHandler={this.removeHandler} />     
          : <p>No entries.</p>
        }
      </div>
    );
  }
}

export default App;
