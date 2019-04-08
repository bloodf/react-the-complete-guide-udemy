import React, { Component } from 'react';
import Person from './Person/Person';
class Persons extends Component {
  render() {
    console.log('[Persons.js] rendering...');

    return this.props.persons.map((person, index) => (
      <Person
        key={index}
        name={person.name}
        age={person.age}
        delete={() => this.props.delete(index)}
        changeName={(newName) => this.props.changeName(newName, index)}
        changeAge={(newAge) => this.props.changeAge(newAge, index)}
      />
    ));
  }
}

export default Persons;
