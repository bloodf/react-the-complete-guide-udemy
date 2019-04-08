import React from 'react';
import Person from './Person/Person';

const Persons = (props) =>
  props.persons.map((person, index) => (
    <Person
      key={index}
      name={person.name}
      age={person.age}
      delete={() => props.delete(index)}
      changeName={(newName) => props.changeName(newName, index)}
      changeAge={(newAge) => props.changeAge(newAge, index)}
    />
  ));

export default Persons;