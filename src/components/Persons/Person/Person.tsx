import React, { Component } from 'react';

import styles from './Person.module.scss';

export interface IPerson {
  id: number;
  name: string;
}

export interface IPersonProps {
  person: IPerson;
  changeHandler: (person: IPerson) => void;
  removeHandler: (person: IPerson) => void;
}

class Person extends Component<IPersonProps> {
  inputRef = React.createRef<HTMLInputElement>();

  inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPerson: IPerson = { ...this.props.person, name: event.target.value };
    this.props.changeHandler(newPerson);
  };

  buttonHandler = () => this.props.removeHandler(this.props.person);

  focusInput() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  render() {
    return (
      <p className={styles.Person}>
        {this.props.person.name}
        <br />
        <input ref={this.inputRef} onChange={this.inputHandler} value={this.props.person.name} />
        <button onClick={this.buttonHandler}>Remove</button>
      </p>
    );
  }
}

export default Person;
