import React, { Fragment } from 'react';
import Button from '../../UI/Buttons/Button';

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
      <main>
        {ingredients}
        <h2>Total: ${props.total.toFixed(2)}</h2>
      </main>
      <footer>
        <Button click={props.cancel} type='Danger'>
          Cancel Order
        </Button>
        <Button click={props.checkout} type='Success'>
          Checkout
        </Button>
      </footer>
    </section>
  );
};

export default OrderSummary;
