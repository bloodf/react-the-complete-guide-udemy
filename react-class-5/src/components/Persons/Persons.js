import React, { Component } from 'react';
import Person from './Person/Person';
class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'SnapShot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }
  
  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

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
