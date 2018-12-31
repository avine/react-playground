import React, { Component } from 'react';
import Person, { IPerson } from './Person/Person';

export interface IPersonsProps {
  persons: IPerson[];
  changeHandler: (person: IPerson) => void;
  removeHandler: (person: IPerson) => void;
}

class Persons extends Component<IPersonsProps> {
  personRef = React.createRef<Person>();

  componentDidUpdate() {
    if (this.personRef.current) {
      this.personRef.current.focusInput();
    }
  }

  render() {
    return (
      <div>
        {this.props.persons.map((person, index) => <Person
          ref={this.personRef}
          key={person.id}
          person={person}
          changeHandler={this.props.changeHandler}
          removeHandler={this.props.removeHandler}
        />)}
      </div>
    );
  }
}

export default Persons;
