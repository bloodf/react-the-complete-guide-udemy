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
    const persons = [...this.state.persons];
    persons[index].name = newName;
    this.setState({ persons });
  };

  switchAgeHandler = (newAge, index) => {
    const persons = [...this.state.persons];
    persons[index].age = newAge;
    this.setState({ persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons });
  };

  addNewPerson = () => {
    this.setState({persons: [...this.state.persons, {
      name: null,
      age: null
    }]})
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => (
        <Person
          key={index}
          name={person.name}
          age={person.age}
          delete={() => this.deletePersonHandler(index)}
          changeName={(newName) => this.switchNameHandler(newName, index)}
          changeAge={(newAge) => this.switchAgeHandler(newAge, index)}
        />
      ));
    }

    const btnStyle = {
      backgroundColor: 'green',
      fontSize: '16px',
      padding: '10px',    
    }

    return (
        <div className='App'>
          <button style={btnStyle} onClick={this.togglePersons}>
            {this.state.showPersons ? 'Hide' : 'Show'} Persons
          </button>
          <button onClick={this.addNewPerson}>Add new Person</button>
          {persons}
        </div>
    );
  }
}

export default App;
