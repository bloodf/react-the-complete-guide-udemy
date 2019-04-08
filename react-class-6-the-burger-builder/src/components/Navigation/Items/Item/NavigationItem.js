import React from 'react';
import CSS from './NavigationItem.css';

const NavigationItem = (props) => (
  <li className={CSS.NavigationItem}>
    <a href={props.link} className={props.active ? CSS.active : null}>
      {props.title}
    </a>
  </li>
);

export default NavigationItem;
