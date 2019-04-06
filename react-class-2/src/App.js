import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    showPersons: true,
    persons: [
      {
        name: 'Heitor',
        age: 31,
      },
      {
        name: 'Raquel',
        age: 35,
      },
      {
        name: 'Marco',
        age: 3,
      },
    ],
  };

  togglePersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  switchNameHandler = (newName, index) => {
    const persons = this.state.persons;
    persons[index].name = newName;
    this.setState({ persons });
  };

  deletePersonHandler = (personIndex) => {
    console.log('Teste');
    const persons = this.state.persons;
    persons.splice(personIndex, 1);

    this.setState({ persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => (
        <Person
          key={index}
          name={person.name}
          age={person.age}
          delete={() => this.deletePersonHandler(index)}
          change={(newName) => this.switchNameHandler(newName, index)}
        />
      ));
    }

    return (
      <div className='App'>
        <button onClick={this.togglePersons}>
          {this.state.showPersons ? 'Hide' : 'Show'} Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
