import React, { Fragment } from 'react';
import CSS from './Modal.css';
import BackDrop from '../Backdrop/Backdrop';

const Modal = (props) => (
  <Fragment>
    <BackDrop show={props.show} hide={props.hide} />
    <div
      className={CSS.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? 1 : 0,
      }}
    >
      {props.children}
    </div>
  </Fragment>
);

export default Modal;
