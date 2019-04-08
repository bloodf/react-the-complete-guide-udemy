import React, { Fragment } from 'react';

const OrderSummary = (props) => {
  const ingredients = props.ingredients ? (
    <ul>
      {Object.keys(props.ingredients).map((ing) => (
        <li key={ing} style={{ textTransform: 'capitalize' }}>
          {ing}: {props.ingredients[ing]}
        </li>
      ))}
    </ul>
  ) : null;
  return (
    <section>
      <header>
        <h1>Your Order</h1>
      </header>
      <main>{ingredients}</main>
      <footer>
        <button>Checkout</button>
      </footer>
    </section>
  );
};

export default OrderSummary;
