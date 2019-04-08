import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/Controls/Build';

const INGREDIENT_PRICES = {
  salad: 2,
  meat: 4,
  bacon: 1,
  cheese: 1.5,
  burger: 4,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0,
    },
    totalPrice: INGREDIENT_PRICES.burger,
  };

  changeIngredient = (type, remove = +1) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1 * remove;
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: updatedCount < 1 ? 0 : updatedCount,
    };
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition * remove;

    this.setState({
      totalPrice: newPrice < 1 ? INGREDIENT_PRICES.burger : newPrice,
      ingredients: {
        ...updatedIngredients,
      },
    });
  };

  render() {
    const disabledInfo = Object.keys(this.state.ingredients).reduce(
      (acc, curr) => ({ ...acc, [curr]: this.state.ingredients[curr] <= 0 }),
      {},
    );

    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          added={(type) => this.changeIngredient(type, +1)}
          removed={(type) => this.changeIngredient(type, -1)}
          disabled={disabledInfo}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
