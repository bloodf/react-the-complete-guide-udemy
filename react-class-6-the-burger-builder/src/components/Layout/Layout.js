import React, { Fragment, Component } from 'react';
import CSS from './Layout.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    visibleMenu: false,
  };

  showMenu = () => {
    this.setState((prevState) => ({ visibleMenu: !prevState.visibleMenu }));
  };

  render() {
    return (
      <Fragment>
        <ToolBar showMenu={this.showMenu} />
        <SideDrawer visible={this.state.visibleMenu} hide={this.showMenu} />
        <main className={CSS.Container}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
