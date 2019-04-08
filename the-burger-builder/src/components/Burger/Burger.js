import React from 'react';
import CSS from './Burger.css';

import Ingredient from './Ingredient/Ingredient';

const Burger = (props) => {
  const burgerIngredients = Object.keys(props.ingredients).map((ingKey) =>
    [...Array(props.ingredients[ingKey])].map((_, index) => (
      <Ingredient key={ingKey + index} type={ingKey} />
    )),
  );

  const addIngredients = <p>Please add ingredients</p>

  return (
    <div className={CSS.Burger}>
      <Ingredient type='bread-top' />
      {burgerIngredients.length ? burgerIngredients : addIngredients}
      <Ingredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
