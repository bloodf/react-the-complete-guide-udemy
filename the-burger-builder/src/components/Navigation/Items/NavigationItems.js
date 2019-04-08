import React from 'react';
import CSS from './NavigationItems.css';
import NavigationItem from './Item/NavigationItem';

const NavigationItems = (props) => (
  <ul className={CSS.NavigationItems}>
    <NavigationItem link='#' title='Burger Builder' active={true} />
    <NavigationItem link='#' title='Checkout' active={false} />
  </ul>
);

export default NavigationItems;
