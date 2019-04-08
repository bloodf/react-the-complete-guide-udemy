import React from 'react';
import CSS from './Build.css';

import BuildControl from './Control/Control';

const controls = [
  {
    label: 'Salad',
    type: 'salad',
  },
  {
    label: 'Cheese',
    type: 'cheese',
  },
  {
    label: 'Bacon',
    type: 'bacon',
  },
  {
    label: 'Meat',
    type: 'meat',
  },
];

const BuildControls = (props) => (
  <section className={CSS.Controls}>
    <header>
      <p>
        <strong>{props.price.toFixed(2)}</strong>
      </p>
    </header>
    <main>
      {controls.map((control, index) => (
        <BuildControl
          key={control.type}
          label={control.label}
          disabled={props.disabled[control.type]}
          added={() => props.added(control.type)}
          removed={() => props.removed(control.type)}
        />
      ))}
    </main>
    <footer>
      <button
        className={CSS.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        Order Now
      </button>
    </footer>
  </section>
);

export default BuildControls;
