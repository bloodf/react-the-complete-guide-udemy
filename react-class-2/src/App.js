import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    showPersons: false,
    persons: [
      {
        name: "Heitor",
        age: 31
      },
      {
        name: "Raquel",
        age: 35
      },
      {
        name: "Marco",
        age: 3
      }
    ]
  };

togglePersons = () => {
  this.setState({ showPersons: !this.state.showPersons });
}

  render() {

    let persons = null;

    if(this.state.showPersons){
      persons = (this.state.persons.map((person, index) => <Person key={index} name={person.name} age={person.age} />));
    }

    return (
      <div className="App">
        <button
          onClick={this.togglePersons}
        >
          {this.state.showPersons ? "Hide" : "Show"} Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
