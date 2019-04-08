import React from 'react';
import CSS from './Backdrop.css';

const BackDrop = (props) =>
  props.show ? <div className={CSS.Backdrop} onClick={props.hide} /> : null;

export default BackDrop;
