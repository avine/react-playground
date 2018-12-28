import * as React from 'react';
import Person, { IPerson } from './Person/Person';

export interface IPersonsProps {
  persons: IPerson[];
  changeHandler: (person: IPerson) => void;
  removeHandler: (person: IPerson) => void;
}

const Persons = (props: IPersonsProps) => (
  <div>
    {props.persons.map(person => <Person 
      key={person.id}
      person={person}
      changeHandler={props.changeHandler}
      removeHandler={props.removeHandler}
    />)}
  </div>
);

export default Persons;
