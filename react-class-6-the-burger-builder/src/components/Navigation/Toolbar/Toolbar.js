import React from 'react';
import CSS from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Items/NavigationItems';
import HamburgerMenu from '../../UI/HamburgerMenu/HamburgerMenu';

const ToolBar = (props) => (
  <header className={CSS.Toolbar}>
    <HamburgerMenu click={props.showMenu} />
    <div style={{ height: '60%' }}>
      <Logo />
    </div>
    <nav className={CSS.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default ToolBar;
