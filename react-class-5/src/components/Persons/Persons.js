import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';
class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  propTypes = {
    persons: PropTypes.checkPropTypes({
      age: PropTypes.number,
      name: PropTypes.string,
    }, this.props),
    changeAge: PropTypes.func,
    delete: PropTypes.func,
    changeName: PropTypes.func,
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'SnapShot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
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
