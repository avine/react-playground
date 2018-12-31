import './App.css';

import React, { Component } from 'react';

import Header from '../components/Header/Header';
import { IPerson } from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';

interface IAppProps {
  title: string;
}

interface IAppState {
  persons: IPerson[];
  newId: number;
}

class App extends Component<IAppProps, IAppState> {
  public state: IAppState = {
    persons: [
      { id: 1, name: 'Stéphane' },
      { id: 2, name: 'Fleur' }
    ],
    newId: 3
  };

  public addHandler = () => {
    this.setState(state => ({
      persons: [{ id: state.newId, name: '...' }, ...state.persons],
      newId: state.newId + 1
    }));
  }

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
        <Header title={this.props.title} />
        <button onClick={this.addHandler}>Add</button>
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
