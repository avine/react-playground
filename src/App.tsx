import React, { Component } from 'react';
import './App.css';

import Person, { IPerson } from './Person/Person';

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
    const persons = this.state.persons.slice();
    const found = persons.filter(p => p.id === person.id)[0];

    if (found) {
      found.name = person.name;
    }

    const state: Partial<IState> = { persons };
    this.setState(state);
  };

  public render() {
    return (
      <div className="App">
        {this.state.persons.map(person => <Person 
          key={person.id}
          person={person}
          changeHandler={this.changeHandler}
        />)}
      </div>
    );
  }
}

export default App;
