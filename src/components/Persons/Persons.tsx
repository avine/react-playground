import * as React from 'react';
import Person, { IPerson } from './Person/Person';

export interface IPersonsProps {
  persons: IPerson[];
  changeHandler: (person: IPerson) => void;
}

const Persons = (props: IPersonsProps) => {
  return (
    <div>
      {props.persons.map(person => <Person 
        key={person.id}
        person={person}
        changeHandler={props.changeHandler}
      />)}
    </div>
  );
};

export default Persons;
