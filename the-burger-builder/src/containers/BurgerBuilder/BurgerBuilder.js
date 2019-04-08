import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/Controls/Build';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    purchasable: false,
    purchasing: false,
  };

  updatePurchase = () => {
    const ingredients = {
      ...this.state.ingredients,
    };

    const sum = Object.keys(ingredients).reduce(
      (acc, curr) => acc + ingredients[curr],
      0,
    );

    this.setState({ purchasable: sum > 0 });
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

    this.setState(
      {
        totalPrice: newPrice < 1 ? INGREDIENT_PRICES.burger : newPrice,
        ingredients: {
          ...updatedIngredients,
        },
      },
      () => {
        this.updatePurchase();
      },
    );
  };

  toggleCheckout = () => {
    this.setState((prevState) => ({ purchasing: !prevState.purchasing }));
  };

  cancelOrder = () => {
    this.setState(
      (prevState) => ({
        purchasing: false,
        ingredients: {
          ...Object.keys(prevState.ingredients).reduce(
            (acc, curr) => ({ ...acc, [curr]: 0 }),
            {},
          ),
        },
        totalPrice: INGREDIENT_PRICES.burger,
      }),
      () => {
        this.updatePurchase();
      },
    );
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
          purchasable={this.state.purchasable}
          ordered={this.toggleCheckout}
        />
        <Modal show={this.state.purchasing} hide={this.toggleCheckout}>
          <OrderSummary
            ingredients={this.state.ingredients}
            total={this.state.totalPrice}
            cancel={this.cancelOrder}
          />
        </Modal>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
