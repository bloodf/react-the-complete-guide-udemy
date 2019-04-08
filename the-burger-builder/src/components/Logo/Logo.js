import React from 'react';
import CSS from './Logo.css';

import LogoImg from '../../assets/img/burger-logo.png';

const Logo = (props) => (
  <div className={CSS.Logo} style={{ height: props.height }}>
    <img src={LogoImg} alt='Logo' />
  </div>
);

export default Logo;
