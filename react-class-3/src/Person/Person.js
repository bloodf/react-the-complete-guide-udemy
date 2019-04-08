import React from 'react';
import Validation from './Validation';
import './Person.css';

const Person = (props) => {
  return React.createElement(
    Validation,
    {
      text: props.name,
    },
    React.createElement(
      'p',
      {
        className: 'Person',
      },
      props.name && props.age
        ? `I'm ${props.name}, age ${props.age}`
        : "I'm nobody",
    ),
    React.createElement('input', {
      defaultValue: props.name,
      placeholder: 'Name',
      onChange: (event) => {
        props.changeName(event.target.value);
      },
    }),
    React.createElement('input', {
      defaultValue: props.age,
      placeholder: 'Age',
      onChange: (event) => {
        props.changeAge(event.target.value);
      },
    }),
    React.createElement(
      'button',
      {
        onClick: props.delete,
      },
      `[X]`,
    ),
  );
};

export default Person;
