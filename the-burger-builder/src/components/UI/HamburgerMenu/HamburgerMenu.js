import React from 'react';
import CSS from './HamburgerMenu.css';

const HamburgerMenu = (props) => (
  <div className={CSS.HamburgerMenu} onClick={props.click}>
    <div />
    <div />
    <div />
  </div>
);

export default HamburgerMenu;
