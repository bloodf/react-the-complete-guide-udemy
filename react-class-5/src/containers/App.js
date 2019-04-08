import React, { Component } from 'react';
import css from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('[App.js] Constructor');
    console.table(props);

    this.state = {
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
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    console.log(props, state);

    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount()');
  }

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
      persons = (
        <Persons
          persons={this.state.persons}
          delete={this.deletePersonHandler}
          changeName={this.switchNameHandler}
          changeAge={this.switchAgeHandler}
        />
      );
    }

    return (
      <div className={css.App}>
        <Cockpit
          togglePersons={this.togglePersons}
          addNewPerson={this.addNewPerson}
          showPersons={this.state.showPersons}
        />
        <hr />
        {persons}
      </div>
    );
  }
}

export default App;
