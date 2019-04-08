import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validation from './Validation';
import css from './Person.css';

class Person extends Component {
  componentDidMount() {
    this.inputElement.focus();
  }

  render() {
    console.log('[Person.js] rendering...');

    return React.createElement(
      Validation,
      {
        text: this.props.name,
        className: css.Person,
      },
      React.createElement(
        'p',
        {},
        this.props.name && this.props.age
          ? `I'm ${this.props.name}, age ${this.props.age}`
          : "I'm nobody",
      ),
      React.createElement('input', {
        ref: (inputEl) => {
          this.inputElement = inputEl;
        },
        defaultValue: this.props.name,
        placeholder: 'Name',
        onChange: (event) => {
          this.props.changeName(event.target.value);
        },
      }),
      React.createElement('input', {
        defaultValue: this.props.age,
        placeholder: 'Age',
        onChange: (event) => {
          this.props.changeAge(event.target.value);
        },
      }),
      React.createElement(
        'button',
        {
          onClick: this.props.delete,
        },
        `[X]`,
      ),
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  changeAge: PropTypes.func,
  delete: PropTypes.func,
  changeName: PropTypes.func,
};

export default Person;
