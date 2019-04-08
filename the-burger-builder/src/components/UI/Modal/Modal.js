import React from 'react';
import CSS from './Modal.css';

const Modal = (props) => <div className={CSS.Modal}>{props.children}</div>;

export default Modal;
