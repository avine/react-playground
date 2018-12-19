import * as React from 'react';

import './Person.css';

export interface IPerson {
  id: number;
  name: string;
}

export interface IPersonProps {
  person: IPerson;
  changeHandler: (person: IPerson) => void;
}

const Person = (props: IPersonProps) => {
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPerson: IPerson = { ...props.person, name: event.target.value };
    props.changeHandler(newPerson);
  };

  return (
    <p className="Person">
      {props.person.name}<br />
      <input onChange={inputHandler} value={props.person.name} />
    </p>
  );
};

export default Person;
