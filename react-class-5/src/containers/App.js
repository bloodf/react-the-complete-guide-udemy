import React, { Component } from 'react';
import css from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('[App.js] Constructor');
    console.table(props);

    this.state = {
      showPersons: true,
      showCockpit: true,
      persons: [
        {
          name: 'Heitor',
          age: false,
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

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate()');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate()');
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
      <Aux>
        <button
          onClick={() =>
            this.setState({ showCockpit: !this.state.showCockpit })
          }
        >
          Toggle CockPit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            togglePersons={this.togglePersons}
            addNewPerson={this.addNewPerson}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
          />
        ) : null}
        <hr />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, css.App);
