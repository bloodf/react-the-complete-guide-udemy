import React from 'react';
import CSS from './Control.css';

const BuildControl = (props) => (
  <section className={CSS.BuildControl}>
    <header className={CSS.Label}>
      <strong>{props.label}</strong>
    </header>
    <main>
      <button
        className={CSS.Less}
        disabled={props.disabled}
        onClick={props.removed}
      >
        Less
      </button>
      <button className={CSS.More} onClick={props.added}>
        More
      </button>
    </main>
  </section>
);

export default BuildControl;
