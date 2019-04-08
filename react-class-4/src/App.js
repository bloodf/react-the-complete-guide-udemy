import React, { Component } from 'react';
import css from './App.css';

import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    this.setState({
      persons: [
        ...this.state.persons,
        {
          name: '',
          age: '',
        },
      ],
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => (
        <ErrorBoundary key={index}>
          <Person
            name={person.name}
            age={person.age}
            delete={() => this.deletePersonHandler(index)}
            changeName={(newName) =>
              this.switchNameHandler(newName, index)
            }
            changeAge={(newAge) => this.switchAgeHandler(newAge, index)}
          />
        </ErrorBoundary>
      ));
    }

    return (
        <div className={css.App}>
          <button className={css.btn} onClick={this.togglePersons}>
            {this.state.showPersons ? 'Hide' : 'Show'} Persons
          </button>
          <button className={css.btn} onClick={this.addNewPerson}>
            Add new Person
          </button>
          {persons}
        </div>
    );
  }
}

export default App;