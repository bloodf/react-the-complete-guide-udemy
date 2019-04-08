import React, { Fragment } from 'react';
import CSS from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Items/NavigationItems';

const SideDrawer = (props) => {
  const classes = [CSS.SideDrawer, props.visible ? CSS.Open : CSS.Close].join(
    ' ',
  );
  return (
    <Fragment>
      <div className={classes}>
        <div style={{ height: '60px', marginBottom: '20px' }}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
      <BackDrop show={props.visible} hide={props.hide} />
    </Fragment>
  );
};

export default SideDrawer;
