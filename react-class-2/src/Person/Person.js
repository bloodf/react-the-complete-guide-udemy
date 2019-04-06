import React from 'react';

const Person = (props) => {
  return React.createElement(
    'div',
    null,
    React.createElement('p', {}, `I'm ${props.name}, age ${props.age}`),
    React.createElement('input', {
      defaultValue: props.name,
      onChange: (event) => {
        props.change(event.target.value);
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
