import React from 'react';
import Validation from './Validation';
import css from './Person.css';

const Person = (props) => {
  console.log('[Person.js] rendering...');
  
  return React.createElement(
    Validation,
    {
      text: props.name,
      className: css.Person,
    },
    React.createElement(
      'p',
      {},
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
