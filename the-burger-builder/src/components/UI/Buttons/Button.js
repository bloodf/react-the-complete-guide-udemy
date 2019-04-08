import React from 'react';
import CSS from './Button.css';

const Button = (props) => (
  <button
    className={[CSS.Button, CSS[props.type]].join(' ')}
    onClick={props.click}
  >
    {props.children}
  </button>
);

export default Button;
