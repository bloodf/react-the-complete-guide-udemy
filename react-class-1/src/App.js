import React, { Component } from "react";
import "./App.css";

import NameChanger from './NameChanger/NameChanger';

class App extends Component {
  state = {
    person: 
      {
        name: "Heitor",
        age: 31,
        hobby: ["MTG", "VideoGame"]
      }
  };

  changeNameHandler = (newName) => {
    this.setState({
      person: {
        ...this.state.person,
        name: newName,
      }
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a {this.state.person.name}</h1>
        <NameChanger change={this.changeNameHandler} />
      </div>
    );
  }
}

export default App;
