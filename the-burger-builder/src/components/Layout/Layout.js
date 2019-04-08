import React, {Fragment} from 'react';
import CSS from './Layout.css';

const Layout = (props) => (
  <Fragment>
    <div>ToolBar, SideDrawer, BackDrop</div>
    <main className={CSS.Container}>{props.children}</main>
  </Fragment>
);

export default Layout;